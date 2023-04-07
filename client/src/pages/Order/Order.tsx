import {IoArrowBackOutline} from "react-icons/all";
import {Link} from "react-router-dom";
import style from './Order.module.scss'
import useAppSelector from "../../hooks/use-app-selector";
import {selectCart} from "../../store/reducer/cart";
import {CountMapProduct} from "../../api/types/product";
import CartItem from "../Cart/CartItem";
import React from "react";

const Order = () => {
  const cart = useAppSelector(selectCart);

  let price = 0;
  const countMap = new Map<number, CountMapProduct>();

  cart.forEach(product => {
    if (countMap.has(product.id)) {
      // @ts-ignore
      const count = countMap.get(product.id).count + 1 || 0;
      countMap.set(product.id, {product, count});
    } else {
      countMap.set(product.id, {product, count: 1});
    }
  });

  cart
      .map((product) => {
        price
            += product.attributes.price
      })

  return <div className={style.wpapper}>
    <div className={style.container}>
      <div>



    <Link to={'/cart'}><IoArrowBackOutline/> Вернуться в корзину</Link>
        <h2>Оформление заказа</h2>
    {/*    todo если авторизован... */}
    <h2>1. Способ доставки</h2>
    <div>

      <div className={style.form_radio_group}>
        <div className={style.form_radio_group_item}>
          <input id="radio-1" type="radio" name="radio" value="1"/>
            <label htmlFor="radio-1">Самовывоз</label>
        </div>
        <div className={style.form_radio_group_item}>
          <input id="radio-2" type="radio" name="radio" value="2"/>
            <label htmlFor="radio-2">Службы доставки</label>
        </div>
        <div className={style.form_radio_group_item}>
          <input id="radio-3" type="radio" name="radio" value="3"/>
            <label htmlFor="radio-3">Собственный курьер</label>
        </div>
      </div>

    </div>
    <h2>
      2. Ваши данные
    </h2>
    <div>
      <div>Наличными
      </div>
      <div>
        Предоплата

      </div>
      <div>
      Онлайн

      </div>
    </div>
    <h2>
      3. Способ оплаты
    </h2>

    <hr/>
    <h2>
      Состав заказа
    </h2>
        <div>
          {Array.from(countMap)
                   .map((product) => {
                const [id, countMapItem] = product
                return <CartItem
                    product={countMapItem} key={id}/>
              //  todo create OrderItem
              })}
        </div>
      </div>

      <div>

        Оформить заказ
        Размещая заказ я подтверждаю, что согласен с  Правилами пользования сайтом и обработки персональных данных  и  Публичной офертой
      </div>


  </div></div>
}

export default Order