import React from 'react';
import Card from "../../components/Card/Card";
import useAppSelector from "../../hooks/use-app-selector";
import cart, {selectCart} from "../../store/reducer/cart";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useAppSelector(selectCart);
  return <React.Fragment>
    <h1>Корзина</h1>
    <div>
      <h3>Продукты: </h3>

      {cart
          // .filter(product => product.attributes.title.startsWith('a'))
          .map(product => <CartItem
            product={product}/>)}
    </div>


  </React.Fragment>
}

export default Cart;