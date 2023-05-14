import {Product} from "../../../api/types/product";
import style from './CardVertical.module.scss'
import {Image} from 'antd'
import React from "react";
import {useNavigate} from "react-router-dom";
import ButtonToFavourite from "../../lib/Button/ButtonToFavourite/ButtonToFavourite";
import ButtonToCart from "../../lib/Button/ButtonToCart/ButtonToCart";
import {Paragraphy} from "../../lib/Typography/Typography";

const CardVertical = (props: {product: Product}) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/catalog/${props.product.id}`)
    }

    return <div className={style.card} >
        <div className={style.info}>Топ продаж</div>
        <ButtonToFavourite className={style.heart} product={props.product} type='button'/>
        <div className={style.img}>
            <Image loading={'lazy'}
                   height={200}
                   src={`http://localhost:1337${props.product.attributes.image.data.attributes.url}`} />
        </div>
        <div style={{marginLeft: '13px', textAlign: 'left',marginTop: '7px'}}>
            {/*<a className={style.title} onClick={handleCardClick}><Paragraphy fontSize={'20px'}>{props.product.attributes.title}</Paragraphy></a>*/}
            <a className={style.title} onClick={handleCardClick}>{props.product.attributes.title}</a>
            <p className={style.description}>100x14 см, Фасовка: 60 шт в коробке</p>

            <div className={style.priceBlock} >
                <Paragraphy className={style.price}>Цена {props.product.attributes.price} ₽</Paragraphy>
               <ButtonToCart product={props.product} type='icon'/>
            </div>
        </div>

    </div>
}

export default CardVertical;