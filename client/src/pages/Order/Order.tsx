import {IoArrowBackOutline} from "react-icons/all";
import {Link} from "react-router-dom";
import style from './Order.module.scss'
import useAppSelector from "../../hooks/use-app-selector";
import {selectCart} from "../../store/reducer/cart";
import {CountMapProduct} from "../../api/types/product";
import React, {useState} from "react";
import Wrapper from "../../components/lib/Wrapper/Wrapper";;
import {Image, Input, Radio, RadioChangeEvent, Space, Steps} from "antd";
import {Button} from "../../components/lib/Button/Button";
import {message} from "../../message/message";
import {Title,Paragraphy,Text} from '../../components/lib/Typography/Typography'

const {Step} = Steps;
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

    const [current, setCurrent] = useState(0);

    const onChange = (value: number) => {
        console.log('onChange:', value);
        setCurrent(value);
    };
    const description = 'This is a description.';

    const [value, setValue] = useState(1);

    const onChange1 = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const handleClickOrder = () => {
        if (cart.length > 0) {
            message({text: `В Вашей корзине ${cart.length} товаров!`, type: 'info'})
            // todo логика оформления заказа
        }else{
            message({text: `В Вашей корзине ${cart.length} товаров!`, type: 'info'})
        }

    }

    const onChangePaymentMethod = (e: RadioChangeEvent) => {
        console.log(`radio checked:${e.target.value}`);
    };

    const onChangeDeliveryMethod = (e: RadioChangeEvent) => {
        console.log(`radio checked:${e.target.value}`);
    };



    return <Wrapper>
        <div className={style.container}>
            <div className={style.LeftSide}>
                <Link to={'/cart'}><div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}><IoArrowBackOutline/><Text align={'left'}>Вернуться в корзину</Text></div></Link>
                <Title align={'left'} margin={'10px 0px 10px 0px'}>Оформление заказа</Title>
                {/*    todo если авторизован... */}



                <Steps current={current}
                       onChange={onChange}
                       direction="vertical">
                <Step title="Контактные данные"
                    description={
                    <div>
                        <div>
                            <Radio.Group onChange={onChange1} value={value}>
                                <Space direction="vertical">
                                    {/*<Radio value={1}>Физическое лицо</Radio>*/}
                                    <Radio value={2}>Юридическое лицо</Radio>
                                </Space>
                            </Radio.Group>
                        </div>
                        <div>
                        <div>
                            <label htmlFor="">Электронная почта</label>
                            <Input placeholder="Введите e-mail"/>
                        </div>
                        <div>
                            <label htmlFor="">Телефон</label>
                            <Input placeholder="Введите номер телефона"/>
                        </div>
                        </div>
                        <div>
                            <label htmlFor="">Фамилия</label>
                            <Input placeholder="Введите фамилию"/>
                        </div>
                        <div>
                            <label htmlFor="">Имя</label>
                            <Input placeholder="Введите имя"/>
                        </div>
                        <div>
                            <label htmlFor="">Отчество</label>
                            <Input placeholder="Введите отчество"/>
                        </div>
                    </div>
                    }
                />
                <Step title="Способ доставки"
                      description={ <Radio.Group onChange={onChangeDeliveryMethod} defaultValue="a" buttonStyle="solid" size="large">
                          <Radio.Button value="a">Самовывоз</Radio.Button>
                          <Radio.Button value="b">Службы доставки</Radio.Button>
                          <Radio.Button value="c">Курьер</Radio.Button>
                      </Radio.Group>}
                />
                <Step title="Способ оплаты"
                      description={ <Radio.Group onChange={onChangePaymentMethod} defaultValue="a" buttonStyle="solid" size="large">
                          <Radio.Button value="a">Наличными</Radio.Button>
                          <Radio.Button value="b">Безналичная оплата</Radio.Button>
                          <Radio.Button value="c">Онлайн</Radio.Button>
                      </Radio.Group>}
                />
            </Steps>
            <hr/>
                <Title align={'left'} margin={'10px 0px 10px 0px'}>Состав заказа</Title>
            <div>
                <table>
                    <tr>
                        <th><Text>Наименование</Text></th>
                        <th><Text>Количество</Text></th>
                        <th><Text>Сумма</Text></th>
                    </tr>
                    {Array.from(countMap)
                        .map((product) => {
                            const [id, countMapItem] = product
                            return <tr>
                                <td><div><Image loading={'lazy'} height={150} // @ts-ignore
                                                src={`http://localhost:1337${countMapItem.product.attributes.image.data.attributes.url}`} />{countMapItem.product.attributes.title}</div></td>
                                <td>{countMapItem.count}</td>
                                <td>{(countMapItem.count * countMapItem.product.attributes.price).toFixed(2)} ₽</td>
                            </tr>
                        })}
                    <tr>
                        <th></th>
                        <th></th>
                        <th><Text weight={'500'}>Итого: {price.toFixed(2)} ₽</Text></th>
                    </tr>
                </table>

            </div>
        </div>

            <div className={style.RightSide}>
                <Title color={'#994C4C'} align={'left'}>Количество товаров в корзине: {cart.length}</Title>
                {/*<p>Способ доставки: {delivery_method}</p>*/}
                <Text align={'left'}>Способ доставки:  </Text>
                <Text align={'left'}>Доставка: </Text>
                <Text align={'left'}>Способ оплаты: </Text>
                {/*<p>Способ оплаты: {payment_method}</p>*/}
                <Title align={'left'} weight={'600'}>Итоговая сумма {price.toFixed(2)} ₽</Title>
                <Button onClick={handleClickOrder}>Подтвердить заказ</Button>
                <Paragraphy fontSize={'14px'}>Размещая заказ я подтверждаю, что согласен с Правилами пользования сайтом и обработки персональных данных и
                    Публичной офертой</Paragraphy>
            </div>


    </div>
</Wrapper>
}

export default Order