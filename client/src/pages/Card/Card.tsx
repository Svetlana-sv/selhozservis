import React from 'react';
import style from './Card.module.scss'
import {Button} from "../../components/lib/Button/Button";
import {Collapse, Image} from "antd";
import {useGetAllProductsQuery, useGetProductQuery} from "../../api/productApi";
import {useLocation, useParams} from "react-router-dom";
const { Panel } = Collapse;
const Card = () => {
    // todo считывание id
    const params = useParams();
    const {data: product, isError, isFetching} = useGetProductQuery(params.id || '');
    return <div className={style.wrapper}>
        <div>
            <div>
                <Image></Image>
            </div>
            <div>
                <p>{product?.data.attributes.title}</p>
                <p>Доп инфа (фасовка и тд)</p>
                <p>Описание</p>
                <p>Цена</p>
                <Button>Добававить в корзину</Button>
            </div>
        </div>


        <div>
            <Collapse defaultActiveKey={['1']} ghost>
                <Panel header="This is panel header 1" key="1">
                    <p>eyyryr</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <p>etyyry</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                    <p>eyteytyeryer</p>
                </Panel>
            </Collapse>
        </div>
    </div>
}

export default Card;