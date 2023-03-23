import React from "react";
import {Product} from "../../api/types/product";

const CartItem = (props: Product) => {


    return <React.Fragment>
        <h2>{props.title}</h2>
    </React.Fragment>
}

export default CartItem