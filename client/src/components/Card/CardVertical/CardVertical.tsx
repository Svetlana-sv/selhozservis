import {Product} from '../../../api/types/product';
import style from './CardVertical.module.scss';
import {Image, Tag} from 'antd';
import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import ButtonToFavourite from '../../lib/Button/ButtonToFavourite/ButtonToFavourite';
import ButtonToCart from '../../lib/Button/ButtonToCart/ButtonToCart';
import {Paragraphy, Text} from '../../lib/Typography/Typography';
import useMediaQuery from "../../../hooks/useMediaQuery";

const CardVertical = (props: { product: Product }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/catalog/${props.product.id}`);
    };

    const isMobile = useMediaQuery('(max-width: 690px)')

    return (
        <div className={style.card}>
            <div className={style.tag}>
                {props.product.attributes.tags?.data.map((tag, index) => {
                    if (props.product.attributes.tags?.data.length > 1 && index === 0) {
                        return (
                            <Tag
                                color={tag.attributes.color}
                                style={{borderRadius: '0px 5px', display: 'flex'}}
                            >
                                <Text fontSize={'13px'} color={'#fff'}>{tag.attributes.title} </Text>
                                {/*<Text fontSize={'18px'} color={'rgba(129,129,129,0.69)'}*/}
                                <Text fontSize={'18px'} color={'rgba(91,91,91,0.69)'}
                                      weight={'700'}>&nbsp;+{(props.product.attributes.tags?.data.length - 1)}</Text>
                            </Tag>
                        )
                    }
                    return (
                        <Tag
                            color={tag.attributes.color}
                            style={{borderRadius: '0px 5px'}}
                        >
                            <Text fontSize={'13px'} color={'#fff'}>{tag.attributes.title} </Text>
                        </Tag>)
                })}
            </div>
            <ButtonToFavourite
                className={style.heart}
                product={props.product}
                type="button"
            />
            <div className={style.img}>
                <Image
                    loading={'lazy'}
                    height={isMobile ? 150 : 200}
                    src={`${props.product.attributes.image?.data.attributes.url}`}
                />
            </div>
            <div
                style={{
                    marginLeft: '13px',
                    textAlign: 'left',
                    marginTop: '7px',
                }}
            >
                <a className={style.title} onClick={handleCardClick}>
                    {props.product.attributes.title}
                </a>
                {props.product.attributes.packing_count != 0 &&
                props.product.attributes.packing.data?.attributes.title ? (
                    <Paragraphy className={style.description}>
                        100x14 см, Фасовка: (
                        {props.product.attributes.packing_count}шт,{' '}
                        {
                            props.product.attributes.packing.data?.attributes
                                .title
                        }
                        )
                    </Paragraphy>
                ) : (
                    <Paragraphy className={style.description}>
                        100x14 см
                    </Paragraphy>
                )}
                {props.product.attributes.rest_products > 0 ? (
                    <div className={style.priceBlock}>
                        {
                            props.product.attributes.price_old && props.product.attributes.price != props.product.attributes.price_old ?
                                <div>
                                    <Paragraphy className={style.priceOld}>
                                        Цена {props.product.attributes.price_old} ₽
                                    </Paragraphy>
                                    <Paragraphy className={style.price}>
                                        Цена {props.product.attributes.price} ₽
                                    </Paragraphy>
                                </div>
                                :
                                <Paragraphy className={style.price}>
                                    Цена {props.product.attributes.price} ₽
                                </Paragraphy>
                        }
                        <ButtonToCart product={props.product} type="icon"/>
                    </div>
                ) : (
                    <div className={style.priceBlock}>
                        <Paragraphy>Нет в наличие</Paragraphy>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardVertical;
