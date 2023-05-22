import React from 'react';
import style from './Card.module.scss'
import {Collapse, Image, Skeleton, Tabs, TabsProps} from "antd";
import {useGetAllProductsQuery, useGetProductQuery} from "../../api/productApi";
import {useParams} from "react-router-dom";
import {Product} from "../../api/types/product";
import {addProduct} from "../../store/reducer/cart";
import useAppDispatch from "../../hooks/use-app-dispatch";
import Wrapper from '../../components/lib/Wrapper/Wrapper';
import {Title,Text} from '../../components/lib/Typography/Typography';
import ToCartButton from '../../components/lib/Button/ButtonToCart/ButtonToCart';
import ButtonToFavourite from '../../components/lib/Button/ButtonToFavourite/ButtonToFavourite';
import styles from "../Home/Home.module.scss";

const {Panel} = Collapse;
import CardReccomend from '../../components/Card/Card'

const Card = () => {
    const params = useParams();
    const {data: product, isError, isFetching} = useGetProductQuery(params.id || '');
    const dispatch = useAppDispatch();

    // todo выгрузка по тэгам
    const {data: products} = useGetAllProductsQuery();

    function handleClickAddProduct() {
        dispatch(addProduct(product?.data!))
    }

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `Сфера применения`,
            children: `${product?.data.attributes.application}`,
        },
        {
            key: '2',
            label: `Состав`,
            children: `${product?.data.attributes.composition}`,
        },
        {
            key: '3',
            label: `Класс опасности`,
            children: `${product?.data.attributes.danger_class}`,
        },
        {
            key: '4',
            label: `Рекомендации по применению`,
            children: `${product?.data.attributes.destination}`,
        },
        {
            key: '5',
            label: `Дополнительная информация`,
            children: `Срок годности: ${product?.data.attributes.period_storage}
            `,
        },
    ];

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
                    <Title align={'left'} >{product?.data.attributes.title}</Title>
                    <Text align={'left'} margin={'10px 0px 10px 0px'} fontSize={'16px'}>{product?.data.attributes.description}</Text>
                    <div className={style.blockRow}>
                        <Text align={'left'} weight={'500'} margin={'0px 10px 0px 0px'}>Цена: {product?.data.attributes.price} ₽ за штуку</Text>
                        <ToCartButton product={product?.data as Product} type='button'/>
                        <ButtonToFavourite product={product?.data as Product} type='button'/>
                    </div>
                </div>

            </div>
            <div className={style.information}>
                <Tabs
                    tabPosition={'top'}
                    type="card"
                    size={'large'}
                    items={items}
                />
            </div>

            <Title align={'left'}>Рекомендуем:</Title>
            <div className={styles.blockRecommendProducts}>
                {isFetching ?
                    <Skeleton active/>
                    :
                    products?.data
                        .map(
                            product => <CardReccomend key={product.id} product={product} type={'vertical'}/>
                        )
                }
            </div>
        </div>
    </Wrapper>
}

export default Card;