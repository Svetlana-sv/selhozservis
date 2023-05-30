import { IoArrowBackOutline } from 'react-icons/all';
import { Link, useNavigate } from 'react-router-dom';
import style from './Order.module.scss';
import useAppSelector from '../../hooks/use-app-selector';
import { selectGroupCart } from '../../store/reducer/cart';
import React, { ReactElement, ReactHTML, useState } from 'react';
import Wrapper from '../../components/lib/Wrapper/Wrapper';

import {Image, Radio, RadioChangeEvent, Row, Space, Steps} from 'antd';
import { Button } from '../../components/lib/Button/Button';
import { message } from '../../message/message';
import {
    Paragraphy,
    Text,
    Title,
} from '../../components/lib/Typography/Typography';
import {
    useAddOrderMutation,
    useAddOrderProductsMutation,
} from '../../api/orderApi';
import { selectUserId, selectUserToken } from '../../store/reducer/authSlice';
import { Table } from 'antd';
import { IUserInfo } from '../../api/types/user';
import CustomizedForm, {FieldData} from "../../components/Account/PersonalData/CustomizedForm/CustomizedForm";
import {useGetUserInfoQuery, useUpdateUserInfoMutation} from "../../api/userApi";
import {Type} from "../../components/Account/PersonalData/PersonalData";

const { Column } = Table;
interface DataType {
    key: React.Key;
    title: string;
    image: ReactElement;
    count: number;
    price: string;
    sum_price: string;
}

const { Step } = Steps;
const Order = () => {
    const { countMap, price, length } = useAppSelector(selectGroupCart);
    const [currentStep, setCurrent] = useState(0);
    const [value, setValue] = useState(1);
    const [userInformation, setUserInfo] = useState<IUserInfo>();
    const [paymentMethod, setPaymentMethod] = useState('');
    const [deliveryMethod, setDeliveryMethod] = useState('');
    const [postOrder, { data }] = useAddOrderMutation();
    const [postOrderProducts] = useAddOrderProductsMutation();
    const changeStep = (value: number) => {
        setCurrent(value);
    };
    const navigate = useNavigate();

    const userId = useAppSelector(selectUserId);

    const handleChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };

    let dataset: DataType[] = [];

    Array.from(countMap).map((product) => {
        const [id, countMapItem] = product;
        dataset.push({
            key: id,
            title: countMapItem.product.attributes.title,
            image: (
                <Image
                    loading={'lazy'}
                    height={150}
                    src={`http://localhost:1337${countMapItem.product.attributes.image.data.attributes.url}`}
                />
            ),
            count: countMapItem.count,
            price: countMapItem.price.toString() + ' ₽',
            sum_price:
                (countMapItem.count * countMapItem.price).toFixed(2) + ' ₽',
        });
    });

    const columns = [
        {
            title: 'Товар',
            dataIndex: 'image',
            key: 'image',
        },
        {
            title: 'Наименование',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Количество',
            dataIndex: 'count',
            key: 'count',
        },
        {
            title: 'Цена',
            dataIndex: 'sum_price',
            key: 'sum_price',
        },
    ];

    const { data: userInfo } = useGetUserInfoQuery(userId);
    const [fields, setFields] = useState<FieldData[]>([
        {
            name: ['last_name'],
            value: `${userInfo?.last_name || ''}`,
        },
        { name: ['name'], value: `${userInfo?.name || ''}` },
        { name: ['middle_name'], value: `${userInfo?.middle_name || ''}` },
        {
            name: ['number'],
            value: `${userInfo?.number || ''}`,
        },
        { name: ['email'], value: `${userInfo?.email || ''}` },
    ]);

    const [type, setType] = useState(
        (userInfo?.type || '') === 'Физическое лицо'
            ? Type.INDIVIDUAL
            : Type.LEGAL_PERSON
    );
    const [newUserInfo] = useUpdateUserInfoMutation();
    // todo POST reguest to add userInfo
    const updateUserInfo = () => {
        newUserInfo({
            id: userId,
            data: {
                name: fields[1].value,
                type:
                    type === Type.INDIVIDUAL
                        ? 'Физическое лицо'
                        : 'Юридическое лицо',
                last_name: fields[0].value,
                email: fields[3].value,
                middle_name: fields[2].value,
                number: fields[4].value,
            },
        })
            .unwrap()
            .then((response) => {
                if (response.data.id){
                    return true;
                } else {
                    message({
                        text: `Ошибка!`,
                        type: 'error',
                    });
                    return false
                }
            });
    }
    const handleClickOrder = () => {
        if (paymentMethod && deliveryMethod && fields) {
            // todo ограничения
            updateUserInfo();

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
                                    <React.Fragment>
                                        <div className={style.typeBlock}>
                                            <Text
                                                align={'left'}
                                                fontSize={'14px'}
                                                weight={'600'}
                                                margin={'5px 0px'}
                                            >
                                                Выберите тип:
                                            </Text>
                                            <Radio.Group
                                                onChange={(e) => setType(e.target.value)}
                                                value={type}
                                                className={style.radioGroup}
                                            >
                                                <Space direction="horizontal">
                                                    <Radio value={Type.INDIVIDUAL} disabled={true}>Физическое лицо</Radio>
                                                    <Radio value={Type.LEGAL_PERSON}>Юридическое лицо</Radio>
                                                </Space>
                                            </Radio.Group>
                                        </div>
                                    <CustomizedForm
                                        fields={fields}
                                        onChange={(newFields) => {
                                            setFields(newFields);
                                        }}
                                    />
                                    </React.Fragment>
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
                    <div className={style.table}>
                        <Table
                            dataSource={dataset}
                            pagination={false}
                            columns={columns}
                            footer={() =>
                                `Итоговая сумма заказа: ${price.toFixed(2)} ₽`
                            }
                        />
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
