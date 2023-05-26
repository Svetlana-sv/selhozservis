import style from './GuideBookCard.module.scss';
import { useParams } from 'react-router-dom';
import Wrapper from '../../components/lib/Wrapper/Wrapper';
import { Paragraphy } from '../../components/lib/Typography/Typography';
import { Collapse } from 'antd';
import { toast } from 'react-toastify';
import React from 'react';
import { useGetGuidesByIdQuery } from '../../api/guideBookApi';

const { Panel } = Collapse;
const GuideBookCard = () => {
    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
    const onChange = (key: string | string[]) => {
        console.log(key);
    };
    const params = useParams();
    const {
        data: guide,
        isError,
        isFetching,
    } = useGetGuidesByIdQuery(params.id || '');
    console.log('productInfo', guide);

    const productInfo = guide?.data[0].attributes.products?.data[0].attributes;
    console.log('productInfo', productInfo);
    return (
        <Wrapper>
            <div className={style.container}>
                <Paragraphy>
                    {/*Название: {guide?.data.attributes.title}*/}
                </Paragraphy>
                <Paragraphy>Title: {productInfo?.title}</Paragraphy>
                {/*<Paragraphy>*/}
                {/*    Сфера применения: {guide?.data.attributes.products_applications?.data.att}*/}
                {/*</Paragraphy>*/}
                {/*<Paragraphy>*/}
                {/*    Назначение: {guide?.data.attributes.destination}*/}
                {/*</Paragraphy>*/}
                <div>
                    <Collapse defaultActiveKey={['1']} onChange={onChange}>
                        <Panel header="This is panel header 1" key="1">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel header 2" key="2">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel header 3" key="3">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </div>
                <div>
                    <Paragraphy>Товары</Paragraphy>
                    {/*{isFetching ? (*/}
                    {/*    <Skeleton active />*/}
                    {/*) : (*/}
                    {/*    productInfo?.data.attributes.pr*/}
                    {/*    products?.data.map((product) => (*/}
                    {/*        <Card*/}
                    {/*            key={product.id}*/}
                    {/*            product={product}*/}
                    {/*            type={'vertical'}*/}
                    {/*        />*/}
                    {/*    ))*/}
                    {/*)}*/}
                </div>
            </div>
        </Wrapper>
    );
};

export default GuideBookCard;
