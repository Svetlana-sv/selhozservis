import {useNavigate, useParams} from 'react-router-dom';
import {useCancelOrderMutation, useGetOrderQuery} from '../../api/orderApi';
import {Button, Modal, Table} from 'antd';
import React, {useState} from 'react';
import style from './OrderHistoryDetails.module.scss'
import {Paragraphy} from '../../components/lib/Typography/Typography'
import {Button as ButtonS} from '../../components/lib/Button/Button'
import {message} from "../../message/message";
const { Column } = Table;
interface DataType {
    key: React.Key;
    title: string;
    count: number;
    price: string;
    sum_price: string;
}
const OrderHistoryDetails = () => {
    const navigate = useNavigate();
    const params = useParams();
    const {
        data: order,
    } = useGetOrderQuery(params.id || '');

    let data: DataType[] = [];

    order?.data[0].attributes.order_products.data.map((item) => {
        data.push({
            key: item.id,
            title: item.attributes.product?.data.attributes.title,
            count: item.attributes.count,
            price: item.attributes.price.toFixed(2) + ' ₽',
            sum_price: item.attributes.sum_price.toFixed(2) +' ₽',
        });
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cancelOrder] = useCancelOrderMutation();
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        order?.data[0].id!=undefined && cancelOrder(order?.data[0].id)
            .unwrap()
            .then((response)=>{
                console.log(response)
                if (response.isError){
                    message({text: `Ошибка!`, type:`error`})
                }else{
                    message({text: `Заказ №${response.data.id} отменен!`, type:`info`})
                    navigate('/account/history')
                }
            })

    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className={style.container}>
            <Modal title="Отмена заказа" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                   footer={[
                       <Button key="back" onClick={handleCancel}>
                           Нет
                       </Button>,
                       <Button key="submit" type="primary" onClick={handleOk}>
                           Да
                       </Button>,
                   ]}>
                <p>Вы уверены, что хотите отменить заказ?</p>
            </Modal>
            <div className={style.info}>
                <div className={style.blockIdButton}>
                <Paragraphy margin={'0px 10px 0px 0px'}>Заказ №{order?.data[0].id}</Paragraphy>
                    <ButtonS width={'110px'} height={'25px'} fontSize={'12px'} colorBackground={'#afafaf'} onClick={showModal}>Отменить заказ</ButtonS>
                </div>
                <Paragraphy>Статус: {order?.data[0].attributes.status}</Paragraphy>
                <Paragraphy>Способ оплаты: {order?.data[0].attributes.payment}</Paragraphy>
                <Paragraphy>Способ доставки: {order?.data[0].attributes.delivery}</Paragraphy>
            </div>
            <div className={style.tableBlock}>

            <Table dataSource={data} pagination={false} footer={() =>
                `Итоговая сумма заказа: ${order?.data[0].attributes.total.toFixed(2)} ₽`
            }>
                <Column title="Наименование" dataIndex="title" key="title" />
                <Column title="Количество" dataIndex="count" key="count" />
                <Column title="Цена" dataIndex="price" key="price" />
                <Column title="Сумма" dataIndex="sum_price" key="sum_price" />
            </Table>
            </div>

        </div>
    );
};

export default OrderHistoryDetails;
