import React from "react";
import {CountMapProduct, Product} from "../../api/types/product";
import {Image, InputNumber} from "antd";
import {Button} from '../../components/lib/Button/Button'
import ButtonIcon from '../../components/lib/Button/ButtonIcon'
import style from './CartItem.module.scss'
import {addProduct, deleteProduct} from "../../store/reducer/cart";
import useAppDispatch from "../../hooks/use-app-dispatch";
import {IoAddOutline, IoHeartOutline, IoRemoveOutline} from "react-icons/io5";
import {message} from "../../message/message";
import ButtonToFavourite from "../../components/lib/Button/ButtonToFavourite/ButtonToFavourite";
import ButtonDelete from "../../components/lib/Button/ButtonDelete/ButtonDelete";
import {Title,Text,Paragraphy} from '../../components/lib/Typography/Typography'

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
        <Image loading={'lazy'} height={150}
            src={`http://localhost:1337${props.product.product.attributes.image.data.attributes.url}`} />
    </div>
    <div className={style.blockMain}>

        <div className={style.blockInfo}>
            <Title align={'left'}>{props.product.product.attributes.title}</Title>
            <div className={style.blockInput}>
                <ButtonIcon icon={IoRemoveOutline} onClick={()=> {
                    dispatch(deleteProduct(props.product.product))
                    }}/>
                    <input value={props.product.count} placeholder="Search products" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const newValue = e.target.value;
                    }}/>
                    <ButtonIcon icon={IoAddOutline} onClick={()=> {
                        dispatch(addProduct(props.product.product))
                        }}/>
            </div>
            <Paragraphy className={style.price}>Цена: {props.product.product.attributes.price} ₽ за штуку</Paragraphy>
        </div>

        <div className={style.blockButtons}>
            <ButtonToFavourite product={props.product.product} />
            <ButtonDelete product={props.product.product} />
        </div>
    </div>
</div>
}

export default CartItem