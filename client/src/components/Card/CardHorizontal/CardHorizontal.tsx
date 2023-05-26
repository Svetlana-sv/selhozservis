import style from './CardHorizontal.module.scss';
import { Product } from '../../../api/types/product';
import { Image, Tag } from 'antd';
import { useNavigate } from 'react-router-dom';
import ButtonToFavourite from '../../lib/Button/ButtonToFavourite/ButtonToFavourite';
import ButtonToCart from '../../lib/Button/ButtonToCart/ButtonToCart';
import React from 'react';

const CardHorizontal = (props: { product: Product }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/catalog/${props.product.id}`);
    };

    return (
        <div className={style.card}>
            <div className={style.tag}>
                {props.product.attributes.tags?.data.map((tag) => (
                    <Tag
                        color={tag.attributes.color}
                        style={{ borderRadius: '0px 5px' }}
                    >
                        {tag.attributes.title}
                    </Tag>
                ))}
            </div>

            <ButtonToFavourite
                className={style.heart}
                product={props.product}
                type="button"
            />
            <div className={style.img}>
                <Image
                    loading={'lazy'}
                    height={200}
                    src={`http://localhost:1337${props.product.attributes.image.data.attributes.url}`}
                />
            </div>
            <div className={style.info}>
                <div>
                    <a className={style.title} onClick={handleCardClick}>
                        {props.product.attributes.title}
                    </a>
                    <p className={style.description}>
                        100x14 см, Фасовка: 60 шт в коробке
                    </p>
                </div>

                <div className={style.priceBlock}>
                    <p className={style.price}>
                        Цена {props.product.attributes.price} ₽
                    </p>
                    <ButtonToCart product={props.product} type="button" />
                </div>
            </div>
        </div>
    );
};

export default CardHorizontal;
