import React from 'react';
import Card from "../../components/Card/Card";
import useAppSelector from "../../hooks/use-app-selector";
import cart, {selectCart} from "../../store/reducer/cart";
import CartItem from "./CartItem";
import style from "./Cart.module.scss"
import {Button} from '../../components/lib/Button/Button'

const Cart = () => {
  const cart = useAppSelector(selectCart);
  return <div>
    <h2 style={{textAlign: 'left'}}>Корзина</h2>
    <div className={style.wrapper}>
      <div className={style.cartItems}>
        {cart
            // .filter(product => product.attributes.title.startsWith('a'))
            .map(product => <CartItem
                product={product}/>)}
      </div>
      <div className={style.cartBlockInfo}>
        <h2>У вас 4 товара</h2>
        <p>Доставка: бесплатно</p>
        <h2>Итого: ***</h2>
        <Button>Оформить заказ</Button>
      </div>

    </div>


  </div>
}

export default Cart;