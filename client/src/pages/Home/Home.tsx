import React from 'react';
import styles from './Home.module.scss';
import {Carousel, Image, Skeleton} from 'antd';
import Wrapper from '../../components/lib/Wrapper/Wrapper';
import { Paragraphy, Title } from '../../components/lib/Typography/Typography';
import pek from '../../assets/pek.png';
import sdek from '../../assets/download.png';
import dl from '../../assets/Delovye_linii-2.jpg';
import Card from '../../components/Card/Card';
import { useGetAllProductsQuery } from '../../api/productApi';
import Icon, {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from "../../hooks/useMediaQuery";

const contentStyle: React.CSSProperties = {
    height: '50vh',
    color: '#fff',
    lineHeight: '50vh',
    textAlign: 'center',
    alignItems: 'center',
    background: '#d2d4d9',
};
const Home = () => {
    // todo выгрузка по тэгам
    const { data: products, isError, isFetching } = useGetAllProductsQuery();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const isMobile = useMediaQuery('(min-width: 1500px)');
    return (
        <Wrapper>
            {isMobile ?
            <Slider {...settings} autoplay className={styles.blockCarousel}>
                <div className={styles.blockSlide}>
                    <h3 style={contentStyle}>
                    <img
                        // height={40vh}
                        src={`/uploads/Bez_imeni2_f2b78903a3.bmp`}/>
                    </h3>
                </div>
                {/*<div>*/}
                {/*    <h3 style={contentStyle}>2</h3>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <h3 style={contentStyle}>3</h3>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <h3 style={contentStyle}>4</h3>*/}
                {/*</div>*/}
            </Slider>
                :
                <div></div>
            }
            <Title align={'left'}>Рекомендуем</Title>
            <div className={styles.blockRecommendProducts}>
                {isFetching ? (
                    <Skeleton active />
                ) : (
                    products?.data.map((product) => (
                        <Card
                            key={product.id}
                            product={product}
                            type={'vertical'}
                        />
                    ))
                )}
            </div>

            <Title align={'left'}>Доставка</Title>

            <div className={styles.blockDelivery}>
                <ul>
                    <li>
                        <Paragraphy>
                            В регионы осуществляется транспортными компаниями:
                            Деловые линии, ПЭК, курьерской службой СДЭК и др.
                        </Paragraphy>
                    </li>
                    <li>
                        <Paragraphy>
                            По Москве и Московской области — курьерская доставка
                            ОДИН МИГ, курьерская служба СДЭК.
                        </Paragraphy>
                    </li>
                    <li>
                        <Paragraphy>
                            Самовывоз со склада по адресу: Москва, Слободской
                            переулок, 6, стр. 10.
                        </Paragraphy>
                    </li>
                    <li>
                        <Paragraphy>
                            По договоренности возможны другие способы доставки.
                        </Paragraphy>
                    </li>
                    <li>
                        <Paragraphy>
                            Доставка осуществляется за счет Покупателя и
                            оплачивается отдельно.
                        </Paragraphy>
                    </li>
                </ul>
            </div>
            <div className={styles.blockDeliveryImage}>
                <Image loading={'lazy'} width={200} src={pek} />
                <Image loading={'lazy'} width={300} src={dl} />
                <Image loading={'lazy'} width={200} src={sdek} />
            </div>
        </Wrapper>
    );
};

export default Home;
