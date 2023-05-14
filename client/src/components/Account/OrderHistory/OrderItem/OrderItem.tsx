import {Order} from "../../../../api/types/order";
import style from './OrderItem.module.scss'
import {Link, useNavigate} from "react-router-dom";
import React from "react";

const OrderItem = ({order} : { order: Order } ) => {
    const navigate = useNavigate();

    const handleOrderItemClick = () => {
      navigate(`/account/history/${order.id}`)
    }

    return <div className={style.orderItem}>
        <div className={style.container}>
            <p>Заказ №{order.id}</p>
            {new Date(order.attributes.createdAt).toLocaleString()}
        </div>
        <p>Статус: {order.attributes.status}</p>
        <p>Оплата: {order.attributes.payment}</p>
        <p>Доставка: {order.attributes.delivery}</p>
        <div className={style.container}>
            <p>Сумма заказа: {order.attributes.total}</p>
            <a className={style.title} onClick={handleOrderItemClick}>Подробнее</a>
        </div>
    </div>
}

export default OrderItem