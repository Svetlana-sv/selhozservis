import React from 'react';
import style from './Card.module.scss'
import {ButtonClick} from "../../components/lib/Button/Button";
import {Collapse, Image} from "antd";
import {useGetAllProductsQuery, useGetProductQuery} from "../../api/productApi";
import {useLocation, useParams} from "react-router-dom";
import {Product} from "../../api/types/product";
import {IoHeartOutline} from "react-icons/io5";
import {toast, ToastContainer} from "react-toastify";
import {message} from "../../message/message";
import {addProduct} from "../../store/reducer/cart";
import useAppDispatch from "../../hooks/use-app-dispatch";
const { Panel } = Collapse;
const Card = () => {
    const params = useParams();
    const {data: product, isError, isFetching} = useGetProductQuery(params.id || '');
    const dispatch = useAppDispatch();
    console.log(product?.data)
    function handleClickAddProduct() {
        dispatch(addProduct(product?.data!))
    }

    return <div className={style.wrapper}>
        <div className={style.container}>


            <div className={style.card}>

                    <Image
                        // @ts-ignore
                        src={`http://localhost:1337${product?.data.attributes.image.data.attributes.url}`}
                        height={300}
                    ></Image>

            </div>
            <div className={style.description}>
                <h1>{product?.data.attributes.title}</h1>
                {/*<p>Доп инфа (фасовка и тд)</p>*/}
                <h3>{product?.data.attributes.description}</h3>
                <h3>{product?.data.attributes.price}</h3>
                <ButtonClick onClick={handleClickAddProduct}>Добававить в корзину</ButtonClick>
                <button className={style.heart} onClick={() => message({text: `${product?.data.attributes.title} добавлено в избранное`, type: 'info'})}><IoHeartOutline size={28}/>м</button>

            </div>


        <div className={style.information}>
            <Collapse ghost>
                <Panel header="Сфера применения" key="1">
                    <p>{product?.data.attributes.application}</p>
                </Panel>
                <Panel header="Состав" key="2">
                    <p>{product?.data.attributes.composition}</p>
                </Panel>
                <Panel header="Класс опасности" key="3">
                    <p>{product?.data.attributes.danger_class}</p>
                </Panel>
                <Panel header="Рекомендации по применению" key="4">
                    <p>{product?.data.attributes.destination}</p>
                </Panel>
                <Panel header="Дополнительная информация" key="5">
                    <p>eyteytyeryer</p>
                </Panel>
            </Collapse>
        </div> </div>
    </div>
}

export default Card;