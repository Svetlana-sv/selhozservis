import { IoArrowBackOutline } from 'react-icons/all';
import { Link, useNavigate } from 'react-router-dom';
import style from './Order.module.scss';
import useAppSelector from '../../hooks/use-app-selector';
import { selectGroupCart } from '../../store/reducer/cart';
import React, { useState } from 'react';
import Wrapper from '../../components/lib/Wrapper/Wrapper';

import { Image, Radio, RadioChangeEvent, Steps } from 'antd';
import { Button } from '../../components/lib/Button/Button';
import { message } from '../../message/message';
import {
    Paragraphy,
    Text,
    Title,
} from '../../components/lib/Typography/Typography';
import PersonalDataForm from '../../components/Account/PersonalData/PersonalDataForm/PersonalDataForm';
import {
    useAddOrderMutation,
    useAddOrderProductsMutation,
} from '../../api/orderApi';
import { selectUserId, selectUserToken } from '../../store/reducer/authSlice';

const { Step } = Steps;
const Order = () => {
    const { countMap, price, length } = useAppSelector(selectGroupCart);
    const [currentStep, setCurrent] = useState(0);
    const [value, setValue] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [deliveryMethod, setDeliveryMethod] = useState('');
    const [postOrder, { data }] = useAddOrderMutation();
    const [postOrderProducts] = useAddOrderProductsMutation();
    const changeStep = (value: number) => {
        console.log('onChange:', value);
        setCurrent(value);
    };
    const navigate = useNavigate();

    const userId = useAppSelector(selectUserId);

    const handleChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };

    const handleClickOrder = () => {
        if (paymentMethod && deliveryMethod) {
            // todo логика оформления заказа
            // useAddOrderMutation(countMap)
            console.log(countMap, price);
            console.log('userId ', userId);
            const order_id = 7;
            postOrder({
                data: {
                    status: 'Обрабатывается',
                    payment: paymentMethod,
                    delivery: deliveryMethod,
                    total: price,
                    order_products: [],
                    user: [userId],
                },
            })
                .unwrap()
                .then((response) => {
                    if (response.data.id) {
                        countMap.forEach((order) => {
                            postOrderProducts({
                                data: {
                                    sum_price: order.price * order.count,
                                    count: order.count,
                                    price: order.price,
                                    product: [order.product.id],
                                    order: [response.data.id],
                                },
                            })
                                .unwrap()
                                .then((response) => {
                                    if (response.data.id) {
                                        message({
                                            text: `Заказ успешно оформлен!`,
                                            type: 'success',
                                        });
                                        navigate('/account/history');
                                    } else {
                                        message({
                                            text: `Ошибка!`,
                                            type: 'error',
                                        });
                                    }
                                });
                        });
                    } else {
                        message({ text: `Ошибка!`, type: 'error' });
                    }
                });

            message({
                text: `В Вашей корзине ${length} товаров!`,
                type: 'info',
            });
        } else {
            message({
                text: `Убедитесь, что все данные заполнены!`,
                type: 'info',
            });
        }
    };
    const handleClickAuth = () => {
        navigate('/authorization');
    };

    const onChangePaymentMethod = (e: RadioChangeEvent) => {
        setPaymentMethod(e.target.value);
    };

    const onChangeDeliveryMethod = (e: RadioChangeEvent) => {
        setDeliveryMethod(e.target.value);
    };

    const authToken = useAppSelector(selectUserToken);
    return (
        <Wrapper>
            <div className={style.container}>
                <div className={style.LeftSide}>
                    <Link to={'/cart'}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '10px',
                            }}
                        >
                            <IoArrowBackOutline />
                            <Text align={'left'}>Вернуться в корзину</Text>
                        </div>
                    </Link>
                    <Title align={'left'} margin={'10px 0px 10px 0px'}>
                        Оформление заказа
                    </Title>

                    <Steps
                        current={currentStep}
                        onChange={changeStep}
                        direction="vertical"
                    >
                        <Step
                            title="Контактные данные"
                            description={
                                authToken ? (
                                    <PersonalDataForm />
                                ) : (
                                    <div>
                                        <Paragraphy
                                            weight={'500'}
                                            margin={'0px 0px 7px 0px'}
                                        >
                                            Для оформления заказа необходимо
                                            войти в личный кабинет!
                                        </Paragraphy>
                                        <Button
                                            onClick={handleClickAuth}
                                            style={{ width: '215px' }}
                                        >
                                            Войти в личный кабинет
                                        </Button>
                                    </div>
                                )
                            }
                        />
                        <Step
                            title="Способ доставки"
                            disabled={!authToken}
                            description={
                                <Radio.Group
                                    disabled={!authToken}
                                    onChange={onChangeDeliveryMethod}
                                    defaultValue="a"
                                    buttonStyle="solid"
                                    size="large"
                                >
                                    <Radio.Button value="Самовывоз">
                                        Самовывоз
                                    </Radio.Button>
                                    <Radio.Button value="Служба доставки">
                                        Служба доставки
                                    </Radio.Button>
                                    <Radio.Button value="Курьер">
                                        Курьер
                                    </Radio.Button>
                                </Radio.Group>
                            }
                        />
                        <Step
                            title="Способ оплаты"
                            disabled={!authToken}
                            description={
                                <Radio.Group
                                    disabled={!authToken}
                                    onChange={onChangePaymentMethod}
                                    defaultValue="a"
                                    buttonStyle="solid"
                                    size="large"
                                >
                                    <Radio.Button value="Наличные">
                                        Наличные
                                    </Radio.Button>
                                    <Radio.Button value="Безналичная оплата">
                                        Безналичная оплата
                                    </Radio.Button>
                                    <Radio.Button
                                        value="Онлайн"
                                        disabled={true}
                                    >
                                        Онлайн
                                    </Radio.Button>
                                </Radio.Group>
                            }
                        />
                    </Steps>
                    <hr />
                    <Title align={'left'} margin={'10px 0px 10px 0px'}>
                        Состав заказа
                    </Title>
                    <div>
                        <table>
                            <tr>
                                <th>
                                    <Text>Наименование</Text>
                                </th>
                                <th>
                                    <Text>Количество</Text>
                                </th>
                                <th>
                                    <Text>Сумма</Text>
                                </th>
                            </tr>
                            {Array.from(countMap).map((product) => {
                                const [id, countMapItem] = product;
                                return (
                                    <tr key={id}>
                                        <td>
                                            <div
                                                className={
                                                    style.blockTitleImage
                                                }
                                            >
                                                <Image
                                                    loading={'lazy'}
                                                    height={150}
                                                    src={`http://localhost:1337${countMapItem.product.attributes.image.data.attributes.url}`}
                                                />
                                                <Paragraphy weight={'500'}>
                                                    {
                                                        countMapItem.product
                                                            .attributes.title
                                                    }
                                                </Paragraphy>
                                            </div>
                                        </td>
                                        <td>{countMapItem.count}</td>
                                        <td>
                                            {(
                                                countMapItem.count *
                                                countMapItem.product.attributes
                                                    .price
                                            ).toFixed(2)}{' '}
                                            ₽
                                        </td>
                                    </tr>
                                );
                            })}
                            <tr>
                                <th></th>
                                <th></th>
                                <th>
                                    <Text weight={'500'}>
                                        Итого: {price.toFixed(2)} ₽
                                    </Text>
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className={style.RightSide}>
                    <Title color={'#994C4C'} align={'left'}>
                        Количество товаров в корзине: {length}
                    </Title>
                    {/*<p>Способ доставки: {delivery_method}</p>*/}
                    <Text align={'left'}>
                        Способ доставки: {deliveryMethod}
                    </Text>
                    <Text align={'left'}>Доставка: </Text>
                    <Text align={'left'}>Способ оплаты: {paymentMethod}</Text>
                    {/*<p>Способ оплаты: {payment_method}</p>*/}
                    <Title align={'left'} weight={'600'}>
                        Итоговая сумма {price.toFixed(2)} ₽
                    </Title>
                    <Button onClick={handleClickOrder}>
                        Подтвердить заказ
                    </Button>
                    <Paragraphy fontSize={'13px'} align={'justify'}>
                        Размещая заказ я подтверждаю, что согласен с Правилами
                        пользования сайтом и обработки персональных данных и
                        Публичной офертой.
                    </Paragraphy>
                </div>
            </div>
        </Wrapper>
    );
};

export default Order;
