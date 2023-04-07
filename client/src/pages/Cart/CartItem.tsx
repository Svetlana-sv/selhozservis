import React from "react";
import {CountMapProduct, Product} from "../../api/types/product";
import {Image, InputNumber} from "antd";
import {ButtonClick} from '../../components/lib/Button/Button'
import Button from '../../components/Buttons/Button'
import style from './CartItem.module.scss'
import {addProduct, deleteProduct} from "../../store/reducer/cart";
import useAppDispatch from "../../hooks/use-app-dispatch";
import {IoHeartOutline} from "react-icons/io5";
import {message} from "../../message/message";
const CartItem = (props: {product: CountMapProduct}) => {
    const dispatch = useAppDispatch();

    const handleDeleteProductClick = () => {
        dispatch(deleteProduct(props.product.product))
    };

    const handleAddProductFavouriteClick = () => {
       // todo добавление в избранное
    };

    return <div className={style.cartItem}>
        <div className={style.blockImage}>
            <Image loading={'lazy'}
                   height={150}
                // @ts-ignore
                   src={`http://localhost:1337${props.product.product.attributes.image.data.attributes.url}`} />
        </div>
        <div className={style.blockMain}>

                <div className={style.blockInfo}>
                    <h2>{props.product.product.attributes.title}</h2>
                    <div>
                    <button onClick={(e) => {
                        dispatch(deleteProduct(props.product.product))
                    }}>-</button>
                    <input value={props.product.count} />
                    <button onClick={(e) => {
                        dispatch(addProduct(props.product.product))
                    }}>+</button>
                </div>
                    <p>Цена: {props.product.product.attributes.price} ₽ за штуку</p>
                </div>

        <div className={style.blockButtons}>
            {/*todo как добавить:*/}
            {/*onClick={() => message({text: `${product?.data.attributes.title} добавлено в избранное`, type: 'info'})}*/}
                <Button title={''} link={'cart'} icon={IoHeartOutline} />
                <ButtonClick onClick={handleDeleteProductClick}>Удалить</ButtonClick>
            </div></div>
    </div>
}

export default CartItem