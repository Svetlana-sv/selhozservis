import { IoHeartOutline } from "react-icons/io5";
import { Product } from "../../../../api/types/product";
import useAppDispatch from "../../../../hooks/use-app-dispatch";
import { addProduct } from "../../../../store/reducer/cart";
import { Button } from "../Button";
import ButtonIcon from "../ButtonIcon";
import React from "react";
import {message} from "../../../../message/message";

type ButtonToFavoriteProps = {
    product?: Product;
    title?: string,
    type?: 'link' | 'button',
    className?: string
}

const ButtonToFavorite = (props: ButtonToFavoriteProps) => {
    const dispatch = useAppDispatch();

    const handleClickProductToFavorite = () => {
        // dispatch(addFavoriteProduct(props.product))
        // todo добавление в избранное
        console.log(props.product?.attributes.title);
        message({text: `${props.product?.attributes.title} добавлено в избранное`, type: 'info'})
    }
    
    return  (
        props.type === 'link' ?
        <ButtonIcon title={`${props.title}`} link={'cart'} icon={IoHeartOutline}/>
        :
        <ButtonIcon className={`${props.className}`} title={''} icon={IoHeartOutline} onClick={handleClickProductToFavorite}/>
        )
}

export default ButtonToFavorite;