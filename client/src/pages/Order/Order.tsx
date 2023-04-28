import {IoArrowBackOutline} from "react-icons/all";
import {Link} from "react-router-dom";
import style from './Order.module.scss'
import useAppSelector from "../../hooks/use-app-selector";
import {selectCart} from "../../store/reducer/cart";
import {CountMapProduct} from "../../api/types/product";
import CartItem from "../Cart/CartItem";
import React, {useState} from "react";
import Wrapper from "../../components/lib/Wrapper/Wrapper";
import {current} from "@reduxjs/toolkit";
import {toast} from "react-toastify";
import onChange = toast.onChange;
import {Input, Radio, RadioChangeEvent, Space, Steps} from "antd";

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

    return <Wrapper>
        <div className={style.container}>
            <div>


                <Link to={'/cart'}><IoArrowBackOutline/> Вернуться в корзину</Link>
                <h2>Оформление заказа</h2>
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
                      description={ <div>
                          <div className={style.form_radio_group}>
                              <div className={style.form_radio_group_item}>
                                  <input id="radio-d-1" type="radio" name="radio1" value="1"/>
                                  <label htmlFor="radio-d-1">Самовывоз</label>
                              </div>
                              <div className={style.form_radio_group_item}>
                                  <input id="radio-d-2" type="radio" name="radio1" value="2"/>
                                  <label htmlFor="radio-d-2">Службы доставки</label>
                              </div>
                              <div className={style.form_radio_group_item}>
                                  <input id="radio-d-3" type="radio" name="radio1" value="3"/>
                                  <label htmlFor="radio-d-3">Собственный курьер</label>
                              </div>
                          </div>
                      </div>}
                />
                <Step title="Способ оплаты"
                      description={ <div>
                          <div className={style.form_radio_group}>
                              <div className={style.form_radio_group_item}>
                                  <input id="radio-1" type="radio" name="radio" value="1"/>
                                  <label htmlFor="radio-1">Наличными</label>
                              </div>
                              <div className={style.form_radio_group_item}>
                                  <input id="radio-2" type="radio" name="radio" value="2"/>
                                  <label htmlFor="radio-2">Безналичная оплата</label>
                              </div>
                              <div className={style.form_radio_group_item}>
                                  <input id="radio-3" type="radio" name="radio" value="3"/>
                                  <label htmlFor="radio-3">Онлайн</label>
                              </div>
                          </div>
                      </div>}
                />
            </Steps>




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
            Размещая заказ я подтверждаю, что согласен с Правилами пользования сайтом и обработки персональных данных и
            Публичной офертой
        </div>


    </div>
</Wrapper>
}

export default Order