import {Product} from "../../../api/types/product";
import style from '../Card.module.scss';
import {Image, message} from 'antd'
import useAppDispatch from "../../../hooks/use-app-dispatch";
import {addProduct} from "../../../store/reducer/cart";
import {Button} from '../../lib/Button/Button';
import {IoAddOutline} from "react-icons/all";
import {IoHeartOutline} from "react-icons/io5";
import React from "react";
import {useNavigate} from "react-router-dom";
import {useCardVertical} from "../../../hooks/use-card-vertical";
import {useGetAllProductsQuery} from "../../../api/productApi";

const CardVertical = (props: {product: Product}) => {
    const {addToCart, addToFavourite, contextHolder} = useCardVertical(props);
    const dispatch = useAppDispatch();

    const handleAddProductClick = () => {
        dispatch(addProduct(props.product))
        addToCart()
    }

    const handleAddProductFavouriteClick = () => {// todo нельзя добавить в избранное если там уже есть данный товар, изменять цвет кнопки
        addToFavourite()
        // todo добавление в избранное
    }

    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/catalog/${props.product.id}`)
    }

    return <div className={style.card} >
        {contextHolder}
        <div className={style.info}>Топ продаж</div>
        <button className={style.heart} onClick={handleAddProductFavouriteClick}><IoHeartOutline size={28}/></button>
        <div style={{marginTop: '25px'}}>
            <Image loading={'lazy'}
                   height={200}
                // @ts-ignore
                   src={`http://localhost:1337${props.product.attributes.image.data.attributes.url}`} />
        </div>
        <div style={{marginLeft: '13px', textAlign: 'left',marginTop: '7px'}}>
            <p className={style.title}>{props.product.attributes.title}</p>
            <p className={style.description}>100x14 см, Фасовка: 60 шт в коробке</p>

            <div className={style.priceBlock} >
                <p className={style.price} >Цена {props.product.attributes.price} ₽</p>
                <Button width={'40px'} onClick={handleAddProductClick}><IoAddOutline size={28}/></Button>
            </div>
        </div>

    </div>
}

export default CardVertical;