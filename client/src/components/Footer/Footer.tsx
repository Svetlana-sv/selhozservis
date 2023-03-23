import React, {useState} from "react";
import {Link} from "react-router-dom";
import style from "./Footer.module.scss"

const Footer = () => {

return <>
    <div className={style.footer}>
        <div>
            <h3>Компания</h3>
            <a>О нас</a>
            <a>Оптовым покупателям</a>
            <a>Производители</a>
        </div>
        <div>
            <h3>Клиентам</h3>
            <a>Оплата и доставка</a>
            <a>Акции</a>
            <a>Договор публичной оферты</a>
            <a>Защита персональных данных</a>
        </div>
        <div>
            <h3>Контакты</h3>
            <a>+7 (495) 647-00-58</a>
            <a>+7 (916) 254-21-12</a>
            <a>selhozservis@internet.ru</a>
        </div>
        <div>
            <h3>График работы</h3>
            <a>Пн-Пт с 10:00 до 17:00</a>
        </div>
        <div> OOO “СЕЛЬХОЗЭКОСЕРВИС” © 2023
        </div>

    </div>
</>
}

export default Footer;