import React from "react";
import {Product} from "../../api/types/product";
import {Image, InputNumber} from "antd";
import {Button} from '../../components/lib/Button/Button'
import style from './CartItem.module.scss'
import {deleteProduct} from "../../store/reducer/cart";
import useAppDispatch from "../../hooks/use-app-dispatch";
const CartItem = (props: {product: Product}) => {
    const dispatch = useAppDispatch();

    const handleDeleteProductClick = () => {
        dispatch(deleteProduct(props.product))
    };

    const handleAddProductFavouriteClick = () => {
       // todo добавление в избранное
    };

    const onChange = () => {
        // todo изменение кол-ва товаров
    };

    return <div className={style.cartItem}>
        <div className={style.blockImage}>
            <Image loading={'lazy'}
                   height={150}
                // @ts-ignore
                   src={`http://localhost:1337${props.product.attributes.image.data.attributes.url}`} />
        </div>
        <div className={style.blockInfo}>
            <h2>{props.product.attributes.title}</h2>
            <p>{props.product.attributes.price} ₽</p>
            <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
            <button onClick={handleAddProductFavouriteClick}>В избранное</button>
            <Button onClick={handleDeleteProductClick}>Удалить</Button>
        </div>
    </div>
}

export default CartItem