import React from 'react';
import Product from "../../components/Product/Product";
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
          .filter(product => product.title.startsWith('a'))
          .map(product => <CartItem
            title={product.title} id={0} image={''} description={''}/>)}
    </div>


  </React.Fragment>
}

export default Cart;