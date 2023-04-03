import {Product} from "../api/types/product";
import {message} from "antd";
import {skipToken} from "@reduxjs/toolkit/query";
import {useGetProductQuery} from "../api/productApi";

export const useCardVertical = (props: { product: Product }) => {

    const [messageApi, contextHolder] = message.useMessage();
    const addToCart = () => {
        messageApi.open({
            type: 'info',
            content: `"${props.product.attributes.title}" добавлено в корзину`,
        });
    };

    const addToFavourite = () => {
        messageApi.open({
            type: 'info',
            content: `"${props.product.attributes.title}" добавлено в избранное`,
        });
    };
    return {addToCart, addToFavourite, contextHolder};

}


