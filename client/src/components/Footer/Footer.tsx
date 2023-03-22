import React, {useState} from "react";
import {Link} from "react-router-dom";
import style from "./Footer.module.scss"

const Footer = () => {

    return <>
        <div className={style.footer}>

            <div>
                <ul>
                    <li>
                        <h3>Компания</h3>
                    </li>
                    <li>
                        <a>О нас</a>
                    </li>
                    <li>
                        <a>Оптовым покупателям</a>
                    </li>
                    <li>
                        <a>Производители</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul>


                <li>

                    <h3>Клиентам</h3>
                </li>
                    <li>
                    <a>Оплата и доставка</a>

                </li>
                    <li>
                    <a>Акции</a>

                    </li>
                    <li>

                    <a>Договор публичной оферты</a>
                </li>
                    <li>

                    <a>Защита персональных данных</a>
                </li>
                </ul>
            </div>
            <div>
                <li>
                <h3>Контакты</h3>

                </li>
                <li>

                    <a>+7 (495) 647-00-58</a>
                </li>
                <li>
                <a>+7 (916) 254-21-12</a>

                </li>
                <li>
                <a>selhozservis@internet.ru</a>

                </li>
                <ul>


                </ul>
            </div>
            <div>
                <ul>
<li>

    <h3>График работы</h3>
</li>
                    <li>
                    <a>Пн-Пт с 10:00 до 17:00</a>

                    </li>
                </ul>
            </div>

            <div> OOO “СЕЛЬХОЗЭКОСЕРВИС” © 2023
            </div>

        </div>
    </>
}

export default Footer;