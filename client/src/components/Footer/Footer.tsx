import React, {useState} from "react";
import {Link} from "react-router-dom";
import style from "./Footer.module.scss"

const Footer = () => {

return <>
    <div className={style.footer}>
        <div>
            <h3>Информация</h3>
            <Link to={"/about"}>О компании</Link>
            <Link to={"/wholesale"}>Оптовым покупателям</Link>
            <Link to={"/manufacturers"}>Производители</Link>
        </div>
        <div>
            <h3>Клиентам</h3>
            <Link to={"/paymentAndDelivery"}>Оплата и доставка</Link>
            <Link to={"/sale"}>Акции</Link>
            <Link to={"/contacts"}>Контакты</Link>
            <Link to={"/PublicOfferAgreement"}>Договор публичной оферты</Link>
            <Link to={"/PersonalDataProtection"}>Защита персональных данных</Link>
        </div>
        <div>
            <h3>Контакты</h3>
            <a>+7 (495) 647-00-58</a>
            <a>+7 (916) 254-21-12</a>
            <a>selhozservis@internet.ru</a>
        </div>
        <div>
            <h3>График работы</h3>
            <p>Пн-Пт с 10:00 до 17:00</p>
            <br/>
            <h3>Адрес</h3>
            <a href="https://yandex.ru/maps/213/moscow/house/slobodskoy_pereulok_6s10/Z04YcA9iT0QOQFtvfXt0eX9kZg==/?ll=37.682620%2C55.758372&z=16">Москва, ул. Слободской переулок, д.6, строение 10, помещение 1</a>
        </div>
        <div> OOO “СЕЛЬХОЗЭКОСЕРВИС” © 2023
        </div>

    </div>
</>
}

export default Footer;