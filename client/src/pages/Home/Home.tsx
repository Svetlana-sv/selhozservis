import React from 'react';
import styles from "./Home.module.scss"
import {Carousel} from "antd";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";

const contentStyle: React.CSSProperties = {
    height: '40vh',
    color: '#fff',
    lineHeight: '30vh',
    textAlign: 'center',
    alignItems: 'center',
    background: '#afb2bb',
};
const Home = () => {

    return <React.Fragment>
        <Carousel autoplay>
            <div>
                <h3 style={contentStyle}>Качественные средства для роста растений по выгодным ценам</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>

        <h2>Рекомендуем</h2>

        <h2>Доставка</h2>
        <div>
            <ul>
                <li>В регионы осуществляется транспортными компаниями: Деловые линии, ПЭК, курьерской службой СДЭК и
                    др.
                </li>
                <li>
                    По Москве и Московской области — курьерская доставка ОДИН МИГ, курьерская служба СДЭК.
                </li>
                <li>
                    Самовывоз со склада по адресу: Москва, Слободской переулок, 6, стр. 10.
                </li>
                <li>
                    По договоренности возможны другие способы доставки.
                </li>
                <li>
                    Доставка осуществляется за счет Покупателя и оплачивается отдельно.
                </li>
            </ul>
        </div>

    </React.Fragment>
}

export default Home;