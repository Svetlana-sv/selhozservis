import React from 'react';
import { CountMapProduct } from '../../api/types/product';
import { Image } from 'antd';
import ButtonIcon from '../../components/lib/Button/ButtonIcon';
import style from './CartItem.module.scss';
import { addProduct, deleteProduct } from '../../store/reducer/cart';
import useAppDispatch from '../../hooks/use-app-dispatch';
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';
import ButtonToFavourite from '../../components/lib/Button/ButtonToFavourite/ButtonToFavourite';
import ButtonDelete from '../../components/lib/Button/ButtonDelete/ButtonDelete';
import { Paragraphy, Title } from '../../components/lib/Typography/Typography';

const CartItem = (props: { product: CountMapProduct }) => {
    const dispatch = useAppDispatch();

    return (
        <div className={style.cartItem}>
            <div className={style.blockImage}>
                <Image
                    loading={'lazy'}
                    height={120}
                    src={`${props.product.product.attributes.image.data.attributes.url}`}
                />
            </div>
            <div className={style.blockMain}>
                <div className={style.blockInfo}>
                    <Title align={'left'} fontSize={'20px'}>
                        {props.product.product.attributes.title}
                    </Title>
                    <div className={style.blockInput}>
                        <ButtonIcon
                            icon={IoRemoveOutline}
                            onClick={() => {
                                dispatch(deleteProduct(props.product.product));
                            }}
                        />
                        <input
                            value={props.product.count}
                            placeholder="Search products"
                        />
                        <ButtonIcon
                            icon={IoAddOutline}
                            onClick={() => {
                                dispatch(addProduct(props.product.product));
                            }}
                        />
                    </div>
                    <Paragraphy className={style.price} fontSize={'20px'}>
                        Цена: {props.product.product.attributes.price} ₽ за
                        штуку
                    </Paragraphy>
                </div>

                <div className={style.blockButtons}>
                    <ButtonToFavourite product={props.product.product}/>
                    <ButtonDelete product={props.product.product} type={'icon'}/>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
