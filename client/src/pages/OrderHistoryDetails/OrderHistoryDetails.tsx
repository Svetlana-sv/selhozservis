import {useParams} from "react-router-dom";
import {useGetOrderQuery} from "../../api/orderApi";
import {Text} from "../../components/lib/Typography/Typography";
import {Image} from "antd";
import React from "react";
import useAppSelector from "../../hooks/use-app-selector";
import {selectGroupCart} from "../../store/reducer/cart";
import {CountMapProduct} from "../../api/types/product";

const OrderHistoryDetails = () => {

  // const getFromMap = <K,V>(map: Map<K, V>, key: K): V => {
  //   const value = map.get(key);
  //   if (value) {
  //     return value;
  //   }
  //   throw new Error('Wrong id');
  // }
  const params = useParams();
  const {data: order, isError, isFetching, isLoading} = useGetOrderQuery(params.id || '');
  console.log(order)


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
  return <>
    <p>{order?.data.id}</p>

    <table>
      <tr>
        <th><Text>Наименование</Text></th>
        <th><Text>Количество</Text></th>
        <th><Text>Сумма</Text></th>
      </tr>
      {order?.data.attributes.products.data
          .map((product) => {
            // const [id, countMapItem] = product
            return <tr>
              {/*<td><div><Image loading={'lazy'} height={150}*/}
              {/*                src={`http://localhost:1337${countMapItem.product.attributes.image.data.attributes.url}`} />{countMapItem.product.attributes.title}</div></td>*/}
              {/*<td>{countMapItem.count}</td>*/}
              {/*<td>{(countMapItem.count * countMapItem.product.attributes.price).toFixed(2)} ₽</td>*/}
              <p>{product.id}</p>
            </tr>
          })}
      <tr>
        <th></th>
        <th></th>
        {/*<th><Text weight={'500'}>Итого: {price.toFixed(2)} ₽</Text></th>*/}
      </tr>
    </table>
  </>
}

export default OrderHistoryDetails