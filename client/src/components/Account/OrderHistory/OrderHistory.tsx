import Wrapper from "../../lib/Wrapper/Wrapper";
import style from './OrderHistory.module.scss'
import {useGetOrdersQuery} from "../../../api/orderApi";
import Card from "../../Card/Card";
import React, {useState} from "react";
import OrderItem from "./OrderItem/OrderItem";
import {Skeleton} from "antd";

const OrderHistory = () => {
    // todo получение orders
    const {data: orders, isError, isFetching, isLoading} = useGetOrdersQuery();

    return <Wrapper>
        <div className={style.container}>
            { isFetching?
                <Skeleton active/>
                :
                orders?.data
                .map(
                    order => <OrderItem key={order.id} order={order}/>
                )}
        </div>

    </Wrapper>
}

export default OrderHistory