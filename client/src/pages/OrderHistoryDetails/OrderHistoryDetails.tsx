import { useParams } from 'react-router-dom';
import { useGetOrderQuery } from '../../api/orderApi';
import { Table } from 'antd';
import React from 'react';

const { Column } = Table;
interface DataType {
    key: React.Key;
    title: string;
    count: number;
    price: number;
    sum_price: number;
}
const OrderHistoryDetails = () => {
    // const getFromMap = <K,V>(map: Map<K, V>, key: K): V => {
    //   const value = map.get(key);
    //   if (value) {
    //     return value;
    //   }
    //   throw new Error('Wrong id');
    // }
    const params = useParams();
    const {
        data: order,
        isError,
        isFetching,
        isLoading,
    } = useGetOrderQuery(params.id || '');
    console.log('order', order);
    // var price = Number(0);
    // const countMap = new Map<number, CountMapProduct>();
    //
    // order?.data.attributes.products.forEach(product => {
    //   if (countMap.has(product.id)) {
    //
    //     const count = getFromMap(countMap, product.id).count + 1;
    //     const price = product.attributes.price;
    //     countMap.set(product.id, {product, count, price });
    //   } else {
    //     countMap.set(product.id, {product, count: 1, price});
    //   }
    // });
    //
    // order?.data.attributes.products.data
    //     .map((product) => {
    //       price
    //           += product.attributes.price
    //     })

    let data: DataType[] = [];
    // const data = new DataType[];
    order?.data[0].attributes.order_products.data.map((item) => {
        data.push({
            key: item.id,
            title: item.attributes.product?.data.attributes.title,
            count: item.attributes.count,
            price: item.attributes.price,
            sum_price: item.attributes.sum_price,
        });
    });
    return (
        <>
            <p>Заказ №{order?.data[0].id}</p>
            <p>Статус: {order?.data[0].attributes.status}</p>
            <p>Способ оплаты: {order?.data[0].attributes.payment}</p>
            <p>Способ доставки: {order?.data[0].attributes.delivery}</p>
            <Table dataSource={data}>
                <Column title="Наименование" dataIndex="title" key="title" />
                <Column title="Количество" dataIndex="count" key="count" />
                <Column title="Цена" dataIndex="price" key="price" />
                <Column title="Сумма" dataIndex="sum_price" key="sum_price" />
            </Table>
            {/*<table>*/}
            {/*    <tr>*/}
            {/*        <th>*/}
            {/*            <Text>Наименование</Text>*/}
            {/*        </th>*/}
            {/*        <th>*/}
            {/*            <Text>Количество</Text>*/}
            {/*        </th>*/}
            {/*        <th>*/}
            {/*            <Text>Сумма</Text>*/}
            {/*        </th>*/}
            {/*    </tr>*/}
            {/*    {order?.data.attributes.order_products.data.map((item) => {*/}
            {/*        return (*/}
            {/*            <tr key={item.attributes.product?.data.id}>*/}
            {/*                <td>*/}
            {/*                    <div>*/}
            {/*                        <Image*/}
            {/*                            loading={'lazy'}*/}
            {/*                            height={150}*/}
            {/*                            src={`http://localhost:1337${item.attributes.product?.data.attributes.image.data.attributes.url}`}*/}
            {/*                        />*/}
            {/*                        {*/}
            {/*                            item.attributes.product?.data?.attributes.title*/}
            {/*                        }*/}
            {/*                    </div>*/}
            {/*                </td>*/}
            {/*                <td>{item.attributes.count}</td>*/}
            {/*                <td>*/}
            {/*                    {(*/}
            {/*                        item.attributes.count **/}
            {/*                        item.attributes.price*/}
            {/*                    ).toFixed(2)}{' '}*/}
            {/*                    ₽*/}
            {/*                </td>*/}
            {/*            </tr>*/}
            {/*        );*/}
            {/*    })}*/}
            {/*    <tr>*/}
            {/*        <th></th>*/}
            {/*        <th></th>*/}
            {/*        /!*<th><Text weight={'500'}>Итого: {price.toFixed(2)} ₽</Text></th>*!/*/}
            {/*    </tr>*/}
            {/*</table>*/}
        </>
    );
};

export default OrderHistoryDetails;
