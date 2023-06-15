import style from './Calculator.module.scss';
import {InputNumber, Select} from 'antd';
import React, {useEffect, useState} from 'react';
import {CalculatorOutlined} from "@ant-design/icons";
import {
    useGetAllCulturesQuery,
    useGetAllMethodsQuery,
    useGetAllTypesQuery,
    useGetInfoByIdGuideQuery
} from "../../api/calculatorApi";
import {Text, Paragraphy, Title} from '../lib/Typography/Typography'
import {Culture, ProductApplication} from "../../api/types/product";

const Calculator = (props: { GuideId: string }) => {
    const [type, SetType] = useState('');
    const [culture, SetCulture] = useState();
    const [method, SetMethod] = useState('');
    const [count, SetCount] = useState<number | null>(0);
    const {data: info, isError} = useGetInfoByIdGuideQuery(props.GuideId);

    const sortInfo: ProductApplication[] = info?.data
        .filter((item) => item.attributes.cultures.data[0].attributes.title === culture)
        .filter((item) => item.attributes.processing_method.data[0].attributes.title === method)
        .filter((item) => item.attributes.types.data[0].attributes.title === type) || []

    useEffect(() => {
        SetType('');
        SetMethod('');
        SetCount(0);
    }, [culture])
    useEffect(() => {
        SetType('');
        SetCount(0);
    }, [method])
    return (
        <div className={style.calculator}>
            <div className={style.calculatorTitle}>
                <CalculatorOutlined style={{fontSize: '26px'}}/>
                <Title fontSize={'22px'}>Калькулятор</Title>
            </div>
            <div className={style.calculatorBlock}>
            <p>Выберите тип культуры</p>
            <Select
                showSearch
                onChange={SetCulture}
                style={{width: 200}}
                placeholder="Выберите тип культуры"
                optionFilterProp="children"
                options={info?.data.map((item) => ({
                    value: item.attributes.cultures.data[0].attributes.title,
                    label: item.attributes.cultures.data[0].attributes.title,
                }))}
            />
            </div>
            {
                culture &&
                <div className={style.calculatorBlock}>
                    <p>Способ обработки</p>
                    <Select
                        showSearch
                        style={{width: 200}}
                        onChange={SetMethod}
                        placeholder="Выберите способ обработки"
                        optionFilterProp="children"
                        options={info?.data
                            .filter((item) => item.attributes.cultures.data[0].attributes.title === culture)
                            .map((item) => ({
                                value: item.attributes.processing_method.data[0].attributes.title,
                                label: item.attributes.processing_method.data[0].attributes.title,
                            }))}
                    />
                </div>
            }
            {
                method &&
                <div className={style.calculatorBlock}>
                    <p>Назначение</p>
                    <Select
                        showSearch
                        style={{width: 200}}
                        onChange={SetType}
                        placeholder="Выберите назначение"
                        optionFilterProp="children"
                        options={info?.data
                            .filter((item) => item.attributes.processing_method.data[0].attributes.title === method)
                            .map((item) => ({
                                value: item.attributes.types.data[0].attributes.title,
                                label: item.attributes.types.data[0].attributes.title,
                            }))}
                    />
                </div>
            }
            {
                type &&
                <div className={style.calculatorCountBlock}>
                    <p>Количество:</p>
                    <InputNumber min={0} placeholder={'0'} onChange={(value: number | null) => {
                        SetCount(value);
                    }}/>
                    <p>{sortInfo
                        .map((item) => {
                            return item.attributes.norm_application_area?.data.attributes.title
                        })}</p>
                </div>
            }
            {
                type && culture && method && count != 0 && count != null &&
                <div>
                    {info?.data[0].attributes.count_application_quantity && info?.data[0].attributes.count_application_area &&
                        <div>
                            <Paragraphy weight={'500'}>Рекомендации по
                                применению: </Paragraphy>
                            <Paragraphy>{sortInfo
                                .map((item) => {
                                        return (
                                            (((item.attributes.count_application_quantity) /
                                                (item.attributes.count_application_area)) * count).toFixed(2) + ' ' +
                                            item.attributes.norm_application_quantity?.data.attributes.short
                                        )
                                    }
                                )
                            } на {count} {sortInfo
                                .map((item) => {
                                    return item.attributes.norm_application_area?.data.attributes.title
                                })}</Paragraphy>
                        </div>
                    }
                    <div>
                        <Paragraphy weight={'500'}>Назначение: </Paragraphy>
                        <Paragraphy>{sortInfo
                            .map((item) => {
                                return item.attributes.destination
                            })}</Paragraphy>
                    </div>
                    {
                        <div>
                            <Paragraphy weight={'500'}>Инструкция: </Paragraphy>
                            <Paragraphy>{sortInfo
                                .map((item) => {
                                    return item.attributes.instruction
                                })}</Paragraphy>
                        </div>
                    }
                    <Paragraphy weight={'500'}>Рекомендуемые препараты:</Paragraphy>
                    <ul>
                        {sortInfo
                            .map((item) => {
                                console.log(item)
                                return item.attributes.products.data.map((it) => <li>{it.attributes.title}</li>)
                            })}
                    </ul>
                </div>
            }
        </div>
    );
};

export default Calculator;
