import React, {useState} from "react";
import {Link} from "react-router-dom";
import style from "./Footer.module.scss"
import {Title,Text, Paragraphy} from "../lib/Typography/Typography"

const Footer = () => {

return <>
    <div className={style.footer}>
        <div>
            <Text color={"var(--footer--FontColor)"} fontSize={'22px'} weight={'400'} margin={'7px'}>Информация</Text>
            <Link to={"/about"}><Text color={"var(--footer--FontColor)"} fontSize={'18px'} weight={'200'}>О компании</Text></Link>
            <Link to={"/wholesale"}><Text color={"var(--footer--FontColor)"} fontSize={'18px'} weight={'200'}>Оптовым покупателям</Text></Link>
            <Link to={"/manufacturers"}><Text color={"var(--footer--FontColor)"} fontSize={'18px'} weight={'200'}>Производители</Text></Link>
        </div>
        <div>
            <Text color={"var(--footer--FontColor)"} fontSize={'22px'} weight={'400'} margin={'7px'}>Клиентам</Text>
            <Link to={"/paymentAndDelivery"}><Text color={"var(--footer--FontColor)"} fontSize={'18px'} weight={'200'}>Оплата и доставка</Text></Link>
            <Link to={"/sale"}><Text color={"var(--footer--FontColor)"} fontSize={'18px'} weight={'200'}>Акции</Text></Link>
            <Link to={"/contacts"}><Text color={"var(--footer--FontColor)"} fontSize={'18px'} weight={'200'}>Контакты</Text></Link>
            <Link to={"/PublicOfferAgreement"}><Text color={"var(--footer--FontColor)"} fontSize={'18px'} weight={'200'}>Договор публичной оферты</Text></Link>
            <Link to={"/PersonalDataProtection"}><Text color={"var(--footer--FontColor)"} fontSize={'18px'} weight={'200'}>Защита персональных данных</Text></Link>
        </div>
        <div>
            <Text color={"var(--footer--FontColor)"} fontSize={'22px'} weight={'400'} margin={'7px'}>Контакты</Text>
            <a><Text color={"var(--footer--FontColor)"} fontSize={'18px'} weight={'200'}>+7 (495) 647-00-58</Text></a>
            <a><Text color={"var(--footer--FontColor)"} fontSize={'18px'} weight={'200'}>+7 (916) 254-21-12</Text></a>
            <a><Text color={"var(--footer--FontColor)"} fontSize={'18px'} weight={'200'}>selhozservis@internet.ru</Text></a>
        </div>
        <div>
            <Text color={"var(--footer--FontColor)"} fontSize={'22px'} weight={'400'} margin={'7px'}>График работы</Text>
            <Text color={"var(--footer--FontColor)"} fontSize={'16px'} weight={'200'}>Пн-Пт с 10:00 до 17:00</Text>
            <br/>
            <Text color={"var(--footer--FontColor)"} fontSize={'22px'} weight={'400'} margin={'7px'}>Адрес</Text>
            <a href="https://yandex.ru/maps/213/moscow/house/slobodskoy_pereulok_6s10/Z04YcA9iT0QOQFtvfXt0eX9kZg==/?ll=37.682620%2C55.758372&z=16"><Text color={"var(--footer--FontColor)"} fontSize={'16px'} weight={'200'}>Москва, ул. Слободской переулок, д.6, строение 10, помещение 1</Text></a>
        </div>
        <div> <Text color={"var(--footer--FontColor)"} fontSize={'14px'} weight={'200'}>OOO “СЕЛЬХОЗЭКОСЕРВИС” © 2023</Text>
        </div>

    </div>
</>
}

export default Footer;