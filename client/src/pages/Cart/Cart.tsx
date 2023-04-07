import React from 'react';
import Card from "../../components/Card/Card";
import useAppSelector from "../../hooks/use-app-selector";
import cart, {selectCart} from "../../store/reducer/cart";
import CartItem from "./CartItem";
import style from "./Cart.module.scss"
import {ButtonClick} from '../../components/lib/Button/Button'
import {CountMapProduct, Product} from "../../api/types/product";
import {navigate} from "ionicons/icons";
import {Image, message} from 'antd'
import {useNavigate} from "react-router-dom";
import {IoArrowForwardOutline} from "react-icons/all";
import mir from '../../assets/Mir-logo.png'

const Cart = () => {
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

    const navigate = useNavigate();

    function handleClickOrder() {
        navigate(`/order`)
    }

    return <div className={style.wrapper}>
        <h2 style={{textAlign: 'left'}}>Корзина</h2>
        <div className={style.container}>
            <div className={style.cartItems}>
                <p>Очистить корзину</p>
                {Array.from(countMap)
                    // .filter(product => product.attributes.title.startsWith('a'))

                    .map((product) => {
                        const [id, countMapItem] = product
                        return <CartItem
                            product={countMapItem} key={id}/>
                    })}
            </div>
            {/*right side*/}
            <div className={style.cartBlockInfo}>
                <h2>В корзине {cart.length} товаров</h2>
                <hr/>
                {/*{if (price >= 9000){*/}
                {/*    <p>Доставка: бесплатно</p>*/}
                {/*    <hr/>*/}
                {/*    }*/}
                {/*}*/}
                <h2>Итоговая сумма {price} ₽</h2>
                <hr/>
                <ButtonClick onClick={handleClickOrder}>Оформить заказ</ButtonClick>
            </div>

            <div className={style.cartBlockInfo}>
                <h2>Принимаем к оплате</h2>
                <Image height={25} src={`${mir}`}/>
                <p>Также можно расплатиться наличными при доставке</p>
                <h2>Доставка</h2>
                <p>Бесплатно при заказе от 30 00 р</p>
            </div>

        </div>

    <div className={style.blockSubscription}>
        <h2>Подпишитесь на рассылку</h2>
        <p>Подпишитесь на рассылку выгодных предложений и узнавайте первыми о новых акциях</p>
        <div>
            <input type="text" placeholder={'Введите e-mail'}/>
            <IoArrowForwardOutline/>
        </div>
    </div>
    </div>
}

export default Cart;