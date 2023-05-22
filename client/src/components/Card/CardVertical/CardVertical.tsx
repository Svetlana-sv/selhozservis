import {Product} from "../../../api/types/product";
import style from './CardVertical.module.scss'
import {Image, Space, Tag} from 'antd'
import React from "react";
import {useNavigate} from "react-router-dom";
import ButtonToFavourite from "../../lib/Button/ButtonToFavourite/ButtonToFavourite";
import ButtonToCart from "../../lib/Button/ButtonToCart/ButtonToCart";
import {Paragraphy} from "../../lib/Typography/Typography";
import Card from "../Card";

const CardVertical = (props: {product: Product}) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/catalog/${props.product.id}`)
    }

    return <div className={style.card} >
        <div className={style.tag}>
        {props.product.attributes.tags?.data
            .map(
            tag => <Tag color={tag.attributes.color} style={{borderRadius: '0px 5px'}}>{tag.attributes.title}</Tag>
            )
        }

        </div>
        {
            props.product.attributes.tags?.data.length>1?
                <div className={style.tagInfo}>+{props.product.attributes.tags?.data.length-1}</div>
                :
                <div></div>
        }
        <ButtonToFavourite className={style.heart} product={props.product} type='button'/>
        <div className={style.img}>
            <Image loading={'lazy'}
                   height={200}
                   src={`http://localhost:1337${props.product.attributes.image?.data.attributes.url}`} />
        </div>
        <div style={{marginLeft: '13px', textAlign: 'left',marginTop: '7px'}}>
            <a className={style.title} onClick={handleCardClick}>{props.product.attributes.title}</a>
            {(props.product.attributes.packing_count != 0 && props.product.attributes.packing.data?.attributes.title)?
                <Paragraphy className={style.description}>100x14 см, Фасовка:
                    ({props.product.attributes.packing_count}шт, {props.product.attributes.packing.data?.attributes.title})</Paragraphy>
            :
                <Paragraphy className={style.description}>100x14 см</Paragraphy>
            }
            <div className={style.priceBlock} >
                <Paragraphy className={style.price}>Цена {props.product.attributes.price} ₽</Paragraphy>
               <ButtonToCart product={props.product} type='icon'/>
            </div>
        </div>

    </div>
}

export default CardVertical;