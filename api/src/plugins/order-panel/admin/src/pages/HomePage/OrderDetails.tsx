import React, {useEffect, useState} from 'react';
import {Layout, BaseHeaderLayout, ContentLayout, Typography} from "@strapi/design-system";
import {Table, Thead, Tbody, Tr, Td, Th} from '@strapi/design-system';
import {useHistory, useParams} from "react-router-dom";
import {Button} from '@strapi/design-system';
import {Box, Stack} from '@strapi/design-system';
import {ModalLayout, ModalBody, ModalHeader, ModalFooter} from '@strapi/design-system';
import {
  SingleSelect,
  SingleSelectOption,
} from '@strapi/design-system';
import {fetchAdmin} from "../../utils/getToken";

export type ApiArrayResponse<T> = {
  data: T[];
};
export type ApiObjectResponse<T> = {
  data: T;
};
type Image = {
  attributes: {
    url: string;
  };
};
export type Product = {
  id: number;
  attributes: {
    title: string;
    image: ApiObjectResponse<Image>;
    description: string;
    price: number;
    price_old: number;
    composition: string;
    expiration_date: string;
    period_storage: string;
    danger_class: string;
    destination: string;
    application: string;
    packing_count: number;
    count_metric: number;
  };
};

export type OrderProducts = {
  id: number;
  attributes: {
    product: ApiObjectResponse<Product>;
    user: ApiArrayResponse<UserRes>;
    count: number;
    price: number;
    sum_price: number;
  };
};
export type UserRes = {
  id: number;
  attributes: {
    number: string;
    email: string;
    last_name: string;
    middle_name: string;
    name: string;
    type: string;
    inn: string;
    company_name: string;
  };
};

export interface Order {
  id: number;
  attributes: {
    order_products: ApiArrayResponse<OrderProducts>;
    createdAt: string;
    user: ApiObjectResponse<UserRes>;
    status: string,
    total: number,
    payment: string,
    delivery: string,
    address: string;
  }
}

interface DataType {
  key: React.Key;
  title: string;
  count: number;
  price: string;
  sum_price: string;
}

const OrderDetails = () => {
  const {
    push,
    location: {pathname},
  } = useHistory();
  const params = useParams();
  const [order, setOrder] = useState<Order>();
  const [isVisible, setIsVisible] = useState(false);
  const {id} = params as { id: string };
  const [value, setValue] = useState();
  const [error, toggleError] = useState();
  const [disabled, toggleDisabled] = useState();

  const getInfo = () => {
    // fetch(`http://localhost:1337/api/orders?filters[id][$eq]=${id}&populate=deep,6`, {
    //   headers: {
    //     "Authorization": getToken()
    //   }
    // }
    fetchAdmin(`http://localhost:1337/api/orders?filters[id][$eq]=${id}&populate=deep,4`)
      .then((response) => response.json())
      .then((data) => {
        const arrayData = Object.values(data.data)
        setOrder(arrayData[0] as Order);
      });
  }

  useEffect(() => {
    getInfo();
  }, []);

  const setStatus = () => {
    let response = fetch(`http://localhost:1337/api/orders/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        "data": {
          "status": value
        }
      })
    }).then(()=>getInfo());

  }
  return (
    <Layout>
      <BaseHeaderLayout
        title={"Панель заказов"}
        subtitle={"Здесь находятся все заказы"}
        as={"h2"}>
      </BaseHeaderLayout>
      {isVisible && <ModalLayout onClose={() => setIsVisible(prev => !prev)} labelledBy="title">
        <ModalHeader>
          <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
            Изменение статуса для закака № {order?.id}
          </Typography>
        </ModalHeader>
        <ModalBody>
          <Box paddingBottom={2}>
            <SingleSelect label="Выберите статус:" required placeholder="Статус" hint="Необходимо выбрать статус"
                          onClear={() => {
                            setValue(undefined);
                          }} error={error} value={value} onChange={setValue} disabled={disabled}>
              <SingleSelectOption value="Завершено">Завершено</SingleSelectOption>
              <SingleSelectOption value="Обрабатывается">Обрабатывается</SingleSelectOption>
              <SingleSelectOption value="Передано в доставку">Передано в доставку</SingleSelectOption>
              <SingleSelectOption value="Ожидает получения"> Ожидает получения</SingleSelectOption>
              <SingleSelectOption value="Ожидает оплату">Ожидает оплату</SingleSelectOption>
              <SingleSelectOption value="Отменено">Отменено</SingleSelectOption>
            </SingleSelect>
          </Box>
        </ModalBody>
        <ModalFooter startActions={<Button onClick={() => setIsVisible(prev => !prev)} variant="tertiary">
          Отмена
        </Button>} endActions={<>
          <Button onClick={() => {
            setIsVisible(prev => !prev);
            setStatus();
          }}>Подтвердить</Button>
        </>}/>
      </ModalLayout>}
      {order &&
        <ContentLayout>
          <Box paddingBottom={2}>
            <Typography variant="beta">Заказ
              № {order.id} от {new Date(order.attributes.createdAt).toLocaleString()}</Typography>
          </Box>
          <Stack spacing={4} horizontal paddingBottom={3}>
            <Typography variant="epsilon">Статус: {order.attributes.status}</Typography>
            <Button onClick={() => setIsVisible(prev => !prev)}>Изменить статус</Button>
          </Stack>
          <Box paddingBottom={2}>
            <Typography variant="epsilon">Способ доставки: {order.attributes.delivery}</Typography></Box>
          {
            order.attributes.delivery === 'Служба доставки' &&
            <Box paddingBottom={2}>
              <Typography variant="epsilon">Адрес доставки: {order.attributes.address}</Typography></Box>
          }
          <Box paddingBottom={2}>
            <Typography variant="epsilon">Способ оплаты: {order.attributes.payment}</Typography></Box>
          <Box paddingBottom={2}>
            <Typography variant="epsilon">Итоговая сумма
              заказа: {order?.attributes.total.toFixed(2)} ₽</Typography></Box>
          <Box paddingBottom={2}>
            <Typography variant="epsilon">ФИО: {order?.attributes.user?.data.attributes.last_name} {order?.attributes.user?.data.attributes.name} {order?.attributes.user?.data.attributes.middle_name}, тел.: {order?.attributes.user?.data.attributes.number}, email: {order?.attributes.user?.data.attributes.email}</Typography></Box>
          <Box paddingBottom={2}>
            <Typography variant="epsilon">Тип: {order?.attributes.user?.data.attributes.type} </Typography>
          </Box>
          <Box paddingBottom={2}>
            {order?.attributes.user?.data.attributes.type === 'Юридическое лицо' &&
              <Typography variant="epsilon"> ИНН: {order?.attributes.user?.data.attributes.inn}, {order?.attributes.user?.data.attributes.company_name}</Typography>
              }
          </Box>


          <Table
            colCount={2}
            // rowCount={contentTypes.collectionTypes.length}
            rowCount={2}
          >
            <Thead>
              <Tr>
                <Th><Typography variant="omega" fontWeight="semiBold">Наименование</Typography></Th>
                <Th><Typography variant="omega" fontWeight="semiBold">Количество</Typography></Th>
                <Th><Typography variant="omega" fontWeight="semiBold">Цена за шт</Typography></Th>
                <Th><Typography variant="omega" fontWeight="semiBold">Сумма</Typography></Th>
              </Tr>
            </Thead>
            <Tbody>
              {order.attributes.order_products.data.map((item) => (
                <Tr key={item.id} style={{cursor: 'pointer'}}>
                  <Td>{item.attributes.product?.data.attributes.title}</Td>
                  <Td>{item.attributes.count}</Td>
                  <Td>{item.attributes.price.toFixed(2) + ' ₽'}</Td>
                  <Td>{item.attributes.sum_price.toFixed(2) + ' ₽'}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

        </ContentLayout>
      }
    </Layout>
  );
};

export default OrderDetails;
