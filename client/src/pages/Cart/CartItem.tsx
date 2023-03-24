import React from "react";
import {Product} from "../../api/types/product";
import {InputNumber} from "antd";

const CartItem = (props: {product: Product}) => {

    // const onChange = (value: number) => {
    const onChange = () => {
        // console.log('changed', value);
    };

    return <React.Fragment>
        <h2>{props.product.attributes.title}</h2>
        <p>{props.product.attributes.price} ₽</p>
        <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
        <button>В избранное</button>
        <button>Удалить</button>
    </React.Fragment>
}

export default CartItem