import {IoArrowBackOutline} from "react-icons/all";
import {Link} from "react-router-dom";
import style from './Order.module.scss'
import useAppSelector from "../../hooks/use-app-selector";
import {selectCart, selectGroupCart} from "../../store/reducer/cart";
import {CountMapProduct} from "../../api/types/product";
import React, {useState} from "react";
import Wrapper from "../../components/lib/Wrapper/Wrapper";;
import {Image, Input, Radio, RadioChangeEvent, Space, Steps} from "antd";
import {Button} from "../../components/lib/Button/Button";
import {message} from "../../message/message";
import {Title,Paragraphy,Text} from '../../components/lib/Typography/Typography'
import PersonalDataForm from "../../components/Account/PersonalData/PersonalDataForm/PersonalDataForm";

const {Step} = Steps;
const Order = () => {
    const {countMap,price,length} = useAppSelector(selectGroupCart);
    const [currentStep, setCurrent] = useState(0);
    const [value, setValue] = useState(1);

    const changeStep = (value: number) => {
        console.log('onChange:', value);
        setCurrent(value);

    };

    const handleChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const handleClickOrder = () => {
        if (length > 0) {
            message({text: `В Вашей корзине ${length} товаров!`, type: 'info'})
            // todo логика оформления заказа
        }else{
            message({text: `В Вашей корзине ${length} товаров!`, type: 'info'})
        }

    }

    const onChangePaymentMethod = (e: RadioChangeEvent) => {
        // todo
        console.log(`radio checked:${e.target.value}`);
    };

    const onChangeDeliveryMethod = (e: RadioChangeEvent) => {
        // todo
        console.log(`radio checked:${e.target.value}`);
    };



    return <Wrapper>
        <div className={style.container}>
            <div className={style.LeftSide}>
                <Link to={'/cart'}><div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}><IoArrowBackOutline/><Text align={'left'}>Вернуться в корзину</Text></div></Link>
                <Title align={'left'} margin={'10px 0px 10px 0px'}>Оформление заказа</Title>
                {/*    todo если авторизован... */}

                <Steps current={currentStep}
                       onChange={changeStep}
                       direction="vertical">
                <Step title="Контактные данные"
                    description={
                        <PersonalDataForm/>
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
                                <td><div><Image loading={'lazy'} height={150}
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
                <Title color={'#994C4C'} align={'left'}>Количество товаров в корзине: {length}</Title>
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