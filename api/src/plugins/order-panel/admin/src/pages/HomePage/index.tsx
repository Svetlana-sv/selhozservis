import React, {useEffect, useState} from 'react';
import {Layout, BaseHeaderLayout, ContentLayout, Typography, Stack, Button} from "@strapi/design-system";
import {Table, Thead, Tbody, Tr, Td, Th} from '@strapi/design-system';
import {useHistory} from "react-router-dom";

export interface Order {
  id: number;
  attributes: {
    status: string,
    total: number,
    payment: string,
    delivery: string,
    createdAt: string
  }
}

const HomePage = () => {
  const {
    push,
    location: {pathname},
  } = useHistory();
  const [orders, setOrders] = useState<Order[]>([]);
  const [inActive, setInActive] = useState(true);

  useEffect(() => {
    fetch('http://localhost:1337/api/orders?sort[0]=createdAt%3Adesc')
      .then((response) => response.json())
      .then((data) => {
        const arrayData = Object.values(data)
        setOrders(Object.values(arrayData[0] as Order[]));
      });
  }, []);

  const hideInActiveOrder = () => {
    setInActive(!inActive)
  }
  return (
    <Layout>
      <BaseHeaderLayout
        title={"Панель заказов"}
        subtitle={"Здесь находятся все заказы"}
        as={"h2"}>
      </BaseHeaderLayout>
      <ContentLayout>
        <Stack spacing={4} horizontal paddingBottom={3}>
          <Typography variant="beta">Количество активных заказов: {Array.from(orders)
            .filter((item) => item.attributes.status!== 'Отменено')
            .filter((item) => item.attributes.status!== 'Завершено').length}</Typography>
          <Button onClick={hideInActiveOrder}>{inActive ? 'Скрыть неактивные заказы': 'Показать неактивные заказы'}</Button>
        </Stack>
        <Table
          colCount={2}
          rowCount={2}
        >
          <Thead>
            <Tr>
              <Th><Typography variant="omega" fontWeight="semiBold">№</Typography></Th>
              <Th><Typography variant="omega" fontWeight="semiBold">Статус</Typography></Th>
              <Th><Typography variant="omega" fontWeight="semiBold">Дата заказа</Typography></Th>
              <Th><Typography variant="omega" fontWeight="semiBold">Сумма</Typography></Th>
              <Th><Typography variant="omega" fontWeight="semiBold">Метод оплаты</Typography></Th>
              <Th><Typography variant="omega" fontWeight="semiBold">Способ доставки</Typography></Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders
              .filter((item) => {
                if (inActive) {
                  return true;
                }
                if ((item.attributes.status === 'Отменено' ||  item.attributes.status === 'Завершено')){
                  return false;
                }
                return true;
              })
              .map((order) => (
              <Tr key={order.id} onClick={() => {
                console.log(order.id);
                push({
                  pathname: `${pathname}/${order.id}`,
                  state: {from: pathname},
                });
              }} style={{cursor: 'pointer'}}>
                <Td>{order.id}</Td>
                <Td><p style={{color: `${(order.attributes.status === 'Отменено' ||  order.attributes.status === 'Завершено') ? '#f44' : '#666687'}`}}>{order.attributes.status}</p></Td>
                <Td>{new Date(order.attributes.createdAt).toLocaleString()}</Td>
                <Td>{order.attributes.total.toFixed(2)} ₽</Td>
                <Td>{order.attributes.payment}</Td>
                <Td>{order.attributes.delivery}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

      </ContentLayout>
    </Layout>
  );
};

export default HomePage;
