import Wrapper from '../../lib/Wrapper/Wrapper';
import style from './OrderHistory.module.scss';
import { useGetOrdersQuery } from '../../../api/orderApi';
import React from 'react';
import OrderItem from './OrderItem/OrderItem';
import { Skeleton } from 'antd';
import useAppSelector from '../../../hooks/use-app-selector';
import { selectUserId } from '../../../store/reducer/authSlice';

const OrderHistory = () => {
    // todo получение orders
    const userId = useAppSelector(selectUserId);
    console.log('userId', userId);
    const {
        data: orders,
        isError,
        isFetching,
        isLoading,
    } = useGetOrdersQuery(userId || -1);

    return (
        <Wrapper>
            <div className={style.container}>
                {isFetching ? (
                    <Skeleton active />
                ) : (
                    orders?.data.map((order) => (
                        <OrderItem key={order.id} order={order} />
                    ))
                )}
            </div>
        </Wrapper>
    );
};

export default OrderHistory;
