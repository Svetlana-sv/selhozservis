import React from 'react';
import useAppSelector from '../../hooks/use-app-selector';
import { reset, selectCart, selectGroupCart } from '../../store/reducer/cart';
import CartItem from './CartItem';
import style from './Cart.module.scss';
import { Button } from '../../components/lib/Button/Button';
import { Text, Title } from '../../components/lib/Typography/Typography';
import { Image } from 'antd';
import { useNavigate } from 'react-router-dom';
import mir from '../../assets/Mir-logo.png';
import Wrapper from '../../components/lib/Wrapper/Wrapper';
import Container from '../../components/lib/Container/Container';
import useAppDispatch from '../../hooks/use-app-dispatch';
import { message } from '../../message/message';
import SubscriptionBlock from '../../components/SubscriptionBlock/SubscriptionBlock';

const Cart = () => {
    const { countMap, price, length } = useAppSelector(selectGroupCart);
    const cart = useAppSelector(selectCart);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    function handleClickOrder() {
        if (length > 0) {
            navigate(`/order`);
        } else {
            message({
                text: `В Вашей корзине ${length} товаров!`,
                type: 'info',
            });
        }
    }

    const handleClearCart = () => {
        dispatch(reset());
    };

    return (
        <Container>
            <Wrapper>
                <div className={style.container}>
                    <div className={style.cartItems}>
                        {Array.from(countMap).map((product) => {
                            const [id, countMapItem] = product;
                            return <CartItem product={countMapItem} key={id} />;
                        })}
                        {cart.length > 0 ? (
                            <div className={style.cartClear}>
                                <Button onClick={handleClearCart}>
                                    Очистить корзину
                                </Button>
                            </div>
                        ) : (
                            <Text margin={'17px'} weight={'300'}>
                                В Вашей корзине пока ничего нет
                            </Text>
                        )}
                    </div>
                    {/*right side*/}
                    <div className={style.cartBlockInfo}>
                        <Title color={'#994C4C'} align={'left'}>
                            Количество товаров в корзине: {length}
                        </Title>

                        {/*{if (price >= 9000){*/}
                        {/*    <p>Доставка: бесплатно</p>*/}
                        {/*    <hr/>*/}
                        {/*    }*/}
                        {/*}*/}
                        <Text
                            align={'left'}
                            weight={'400'}
                            margin={'10px 0px 15px 0px'}
                            fontSize={'20px'}
                        >
                            Итоговая сумма {price.toFixed(2)} ₽
                        </Text>

                        <Button onClick={handleClickOrder}>
                            Оформить заказ
                        </Button>
                    </div>

                    <div className={style.cartBlockInfo}>
                        <Title color={'#994C4C'} align={'left'}>
                            Принимаем к оплате
                        </Title>
                        <div className={style.cartBlockInfoImage}>
                            <Image height={25} src={`${mir}`} />
                        </div>
                        <Text align={'left'} fontSize={'16px'} weight={'300'}>
                            Также можно расплатиться наличными при доставке
                        </Text>
                        <Title color={'#994C4C'} align={'left'}>
                            Доставка
                        </Title>
                        <Text align={'left'} fontSize={'16px'} weight={'300'}>
                            Бесплатно при заказе от 30 00 р
                        </Text>
                    </div>
                </div>
            </Wrapper>
            <SubscriptionBlock />
        </Container>
    );
};

export default Cart;
