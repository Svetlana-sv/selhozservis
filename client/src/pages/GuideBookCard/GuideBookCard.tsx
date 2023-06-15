import style from './GuideBookCard.module.scss';
import {useParams} from 'react-router-dom';
import Wrapper from '../../components/lib/Wrapper/Wrapper';
import {Paragraphy, Title,Text} from '../../components/lib/Typography/Typography';
import {Collapse, Skeleton} from 'antd';
import {toast} from 'react-toastify';
import React, {useState} from 'react';
import {useGetGuidesByIdQuery} from '../../api/guideBookApi';
import ReactMarkdown from 'react-markdown';

const {Panel} = Collapse;
import remarkGfm from 'remark-gfm';
import Card from '../../components/Card/Card';
import Calculator from "../../components/Calculator/Calculator";
import {useGetInfoByIdGuideQuery} from "../../api/calculatorApi";

const GuideBookCard = () => {
    const params = useParams();
    const {
        data: guide,
        isError,
        isFetching,
    } = useGetGuidesByIdQuery(params.id || '');
    const {data: info, isError: err} = useGetInfoByIdGuideQuery(params.id || '');
    return (
        <Wrapper>
            <div className={style.container}>
                <Title
                    align={'left'}
                    weight={'600'}
                    margin={'0px 0px 10px 0px'}
                    color={'#994C4C'}
                >
                    Название: {guide?.data[0].attributes.title}
                </Title>
                <div className={style.Block}>
                    <div className={style.LeftBlock}>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {guide?.data[0].attributes.info!}
                        </ReactMarkdown>
                    </div>
                    <div className={style.RightBlock}>
                        {
                            info?.data.length != 0 &&
                            <div>
                                <Text weight={'500'} fontSize={'19px'}>
                                    Калькулятор расхода препарата {guide?.data[0].attributes.title}
                                </Text>
                                <Calculator GuideId={params.id || ''} key={params.id}/>
                            </div>
                        }
                    </div>
                </div>
                <div>
                    <Title
                        align={'left'}
                        weight={'600'}
                        margin={'15px 0px 10px 0px'}
                        color={'#994C4C'}
                    >
                        Товары
                    </Title>
                    <div className={style.productsList}>
                        {isFetching ? (
                            <Skeleton active/>
                        ) : (
                            guide?.data[0].attributes.products?.data.map(
                                (product) => (
                                    <Card
                                        key={product.id}
                                        product={product}
                                        type={'vertical'}
                                    />
                                )
                            )
                        )}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default GuideBookCard;
