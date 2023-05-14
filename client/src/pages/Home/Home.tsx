import React from 'react';
import styles from "./Home.module.scss"
import {Carousel, Image, Skeleton} from "antd";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Wrapper from '../../components/lib/Wrapper/Wrapper';
import {Paragraphy, Title, Text} from '../../components/lib/Typography/Typography';
import pek from '../../assets/pek.png';
import sdek from '../../assets/download.png';
import dl from '../../assets/Delovye_linii-2.jpg';
import Card from "../../components/Card/Card";
import {useGetAllProductsQuery} from "../../api/productApi";
import {CarTwoTone} from "@ant-design/icons";


const contentStyle: React.CSSProperties = {
    height: '40vh',
    color: '#fff',
    lineHeight: '40vh',
    textAlign: 'center',
    alignItems: 'center',
    background: '#d2d4d9',
};
const Home = () => {
    // todo выгрузка по тэгам
    const {data: products, isError, isFetching} = useGetAllProductsQuery();

    return <Wrapper>
        <Carousel autoplay className={styles.blockCarousel}>
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

        <Title align={'left'}>Рекомендуем</Title>
        <div className={styles.blockRecommendProducts}>
            {isFetching ?
                <Skeleton active/>
                :
                products?.data
                    .map(
                        product => <Card key={product.id} product={product} type={'vertical'}/>
                    )
            }
        </div>

        <Title align={'left'}>Доставка</Title>

        <div className={styles.blockDelivery}>
            <ul>
                <li><Paragraphy>В регионы осуществляется транспортными компаниями: Деловые линии, ПЭК, курьерской
                    службой СДЭК и
                    др.</Paragraphy>
                </li>
                <li><Paragraphy>
                    По Москве и Московской области — курьерская доставка ОДИН МИГ, курьерская служба СДЭК.</Paragraphy>
                </li>
                <li><Paragraphy>
                    Самовывоз со склада по адресу: Москва, Слободской переулок, 6, стр. 10.</Paragraphy>
                </li>
                <li><Paragraphy>
                    По договоренности возможны другие способы доставки.</Paragraphy>
                </li>
                <li><Paragraphy>
                    Доставка осуществляется за счет Покупателя и оплачивается отдельно.</Paragraphy>
                </li>
            </ul>
        </div>
        <div className={styles.blockDeliveryImage}>
            <Image loading={'lazy'}
                   width={200}
                   src={pek}/>
            <Image loading={'lazy'}
                   width={200}
                   src={sdek}/>
            <Image loading={'lazy'}
                   width={200}
                   src={dl}/>
        </div>
    </Wrapper>
}

export default Home;