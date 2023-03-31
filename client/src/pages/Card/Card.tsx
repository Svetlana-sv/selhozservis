import React from 'react';
import style from './Card.module.scss'
import {Button} from "../../components/lib/Button/Button";
import {Collapse, Image} from "antd";
import {useGetAllProductsQuery, useGetProductQuery} from "../../api/productApi";
import {useLocation, useParams} from "react-router-dom";
import {Product} from "../../api/types/product";
const { Panel } = Collapse;
const Card = () => {
    // todo считывание id
    const params = useParams();
    const {data: product, isError, isFetching} = useGetProductQuery(params.id || '');
    console.log(product)
    return <div className={style.wrapper}>
        <div>
            <div>
                <Image
                    // @ts-ignore
                    // src={`http://localhost:1337${product.data.attributes.image.data.attributes.url}`}
                ></Image>
            </div>
            <div>
                {/*<p>{product?.data.attributes.title}</p>*/}
                <p>Доп инфа (фасовка и тд)</p>
                <p>Описание</p>
                <p>Цена</p>
                <Button>Добававить в корзину</Button>
            </div>
        </div>


        <div>
            <Collapse ghost>
                <Panel header="Сфера применения" key="1">
                    {/*<p>{product?.data.attributes.application}</p>*/}
                </Panel>
                <Panel header="Состав" key="2">
                    {/*<p>{product?.data.attributes.composition}</p>*/}
                </Panel>
                <Panel header="Класс опасности" key="3">
                    {/*<p>{product?.data.attributes.danger_class}</p>*/}
                </Panel>
                <Panel header="Рекомендации по применению" key="4">
                    {/*<p>{product?.data.attributes.destination}</p>*/}
                </Panel>
                <Panel header="Дополнительная информация" key="5">
                    <p>eyteytyeryer</p>
                </Panel>
            </Collapse>
        </div>
    </div>
}

export default Card;