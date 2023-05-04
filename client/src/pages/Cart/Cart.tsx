import React from 'react';
import Card from "../../components/Card/Card";
import useAppSelector from "../../hooks/use-app-selector";
import cart, {reset, selectCart} from "../../store/reducer/cart";
import CartItem from "./CartItem";
import style from "./Cart.module.scss"
import {Button} from '../../components/lib/Button/Button'
import {Title, Paragraphy, Text} from '../../components/lib/Typography/Typography'
import {CountMapProduct, Product} from "../../api/types/product";
import {navigate} from "ionicons/icons";
import {Image, Input} from 'antd';
import {useNavigate} from "react-router-dom";
import {IoArrowForwardOutline} from "react-icons/all";
import mir from '../../assets/Mir-logo.png'
import Wrapper from '../../components/lib/Wrapper/Wrapper';
import useAppDispatch from '../../hooks/use-app-dispatch';
import {message} from "../../message/message";

const Cart = () => {
    const cart = useAppSelector(selectCart);
    var price = Number(0);
    const countMap = new Map<number, CountMapProduct>();
    const dispatch = useAppDispatch();

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
        if (cart.length > 0) {
            navigate(`/order`)
        } else {
            message({text: `В Вашей корзине ${cart.length} товаров!`, type: 'info'})
        }

    }

    const handleClearCart = () => {
        dispatch(reset());
    }

    return <div className={style.cart}>
        <Wrapper>
            <div className={style.container}>

                <div className={style.cartItems}>


                    {Array.from(countMap)
                        .map((product) => {
                            const [id, countMapItem] = product
                            return <CartItem
                                product={countMapItem} key={id}/>
                        })}
                    {cart.length > 0 ? <div className={style.cartClear}>
                            <Button onClick={handleClearCart}>Очистить корзину</Button>
                        </div>
                        : <div className={style.cartClearText}>В Вашей корзине пока ничего нет</div>}

                </div>
                {/*right side*/}
                <div className={style.cartBlockInfo}>
                    <Title color={'#994C4C'} align={'left'}>Количество товаров в корзине: {cart.length}</Title>

                    {/*{if (price >= 9000){*/}
                    {/*    <p>Доставка: бесплатно</p>*/}
                    {/*    <hr/>*/}
                    {/*    }*/}
                    {/*}*/}
                    <Title align={'left'} weight={'500'}>Итоговая сумма {price.toFixed(2)} ₽</Title>

                    <Button onClick={handleClickOrder}>Оформить заказ</Button>
                </div>

                <div className={style.cartBlockInfo}>
                    <Title color={'#994C4C'} align={'left'}>Принимаем к оплате</Title>
                    <div className={style.cartBlockInfoImage}>
                        <Image height={25} src={`${mir}`}/>
                    </div>
                    <Text align={'left'} fontSize={'16px'} weight={'300'}>Также можно расплатиться наличными при
                        доставке</Text>
                    <Title color={'#994C4C'} align={'left'}>Доставка</Title>
                    <Text align={'left'} fontSize={'16px'} weight={'300'}>Бесплатно при заказе от 30 00 р</Text>
                </div>

            </div>

        </Wrapper>
        <div className={style.containerblockSubscription}>
            <div className={style.blockSubscription}>
                <div className={style.blockSubscriptionLeftItem}>
                    <div className={style.text}>
                        <Title color={'#EFEFEF'}>Подпишитесь на рассылку</Title>
                        <Paragraphy color={'#EFEFEF'} weight={'300'} align={'center'}>Подпишитесь на рассылку выгодных
                            предложений и узнавайте первыми о новых акциях</Paragraphy>
                    </div>

                </div>
                <div className={style.blockSubscriptionRightItem}>
                    <Input placeholder="Введите email"/>
                    <IoArrowForwardOutline color={'#EFEFEF'} size={'28px'}/>
                </div>
            </div>
        </div>
    </div>
}

export default Cart;