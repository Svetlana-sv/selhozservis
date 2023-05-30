import style from './GuideBookCard.module.scss';
import { useParams } from 'react-router-dom';
import Wrapper from '../../components/lib/Wrapper/Wrapper';
import { Paragraphy, Title } from '../../components/lib/Typography/Typography';
import { Collapse, Skeleton } from 'antd';
import { toast } from 'react-toastify';
import React from 'react';
import { useGetGuidesByIdQuery } from '../../api/guideBookApi';
import ReactMarkdown from 'react-markdown';
const { Panel } = Collapse;
import remarkGfm from 'remark-gfm';
import Card from '../../components/Card/Card';
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
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {guide?.data[0].attributes.info!}
                </ReactMarkdown>

                {guide?.data[0].attributes.type !== null && (
                    <div className={style.productsApplicationCollapse}>
                        <Collapse defaultActiveKey={['1']} onChange={onChange}>
                            {}
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
                )}
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
                            <Skeleton active />
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
