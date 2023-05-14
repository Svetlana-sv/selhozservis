import React from 'react';
import style from './Card.module.scss'
import {Collapse, Image, Tabs} from "antd";
import {useGetProductQuery} from "../../api/productApi";
import {useParams} from "react-router-dom";
import {Product} from "../../api/types/product";
import {addProduct} from "../../store/reducer/cart";
import useAppDispatch from "../../hooks/use-app-dispatch";
import Wrapper from '../../components/lib/Wrapper/Wrapper';
import ToCartButton from '../../components/lib/Button/ButtonToCart/ButtonToCart';
import ButtonToFavourite from '../../components/lib/Button/ButtonToFavourite/ButtonToFavourite';
const { Panel } = Collapse;
const Card = () => {
    const params = useParams();
    const {data: product, isError, isFetching} = useGetProductQuery(params.id || '');
    const dispatch = useAppDispatch();

    function handleClickAddProduct() {
        dispatch(addProduct(product?.data!))
    }


    // кнопки удалить, в избранное, добавить (двух видов)

    // про карточку

    return <Wrapper>
        <div className={style.container}>


        <div className={style.card}>
            <div>
                <div className={style.info}>Топ продаж</div>
                <div className={style.image}>
                    <Image
                        src={`http://localhost:1337${product?.data.attributes.image.data.attributes.url}`}
                        height={300}
                    ></Image>

                </div>
            </div>

            <div className={style.description}>
                <h1>{product?.data.attributes.title}</h1>
                {/*<p>Доп инфа (фасовка и тд)</p>*/}
                <h3>{product?.data.attributes.description}</h3>
                <h3>{product?.data.attributes.price}</h3>
                <ToCartButton product={product?.data as Product} type='button'/>
                {/*<ToCartButton product={product?.data as Product} type='icon'/>*/}
                <ButtonToFavourite product={product?.data as Product} type='button'/>
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
        </div>



        </div>

        <Tabs
            // onChange={onChange}
            tabPosition={'top'}
            type="card"
            size={'large'}
            items={new Array(3).fill(null).map((_, i) => {
                const id = String(i + 1);
                return {
                    label: `Tab ${id}`,
                    key: id,
                    children: `Content of Tab Pane ${id}`,
                };
            })}
        />

        </div>
    </Wrapper>
}

export default Card;