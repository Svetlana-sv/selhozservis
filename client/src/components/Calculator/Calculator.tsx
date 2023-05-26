import style from './Calculator.module.scss';
import { Select } from 'antd';
import React from 'react';

const Calculator = () => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    return (
        <div className={style.calculator}>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    (option?.label ?? '').includes(input)
                }
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '')
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={[
                    {
                        value: '1',
                        label: 'Not Identified',
                    },
                    {
                        value: '2',
                        label: 'Closed',
                    },
                    {
                        value: '3',
                        label: 'Communicated',
                    },
                    {
                        value: '4',
                        label: 'Identified',
                    },
                    {
                        value: '5',
                        label: 'Resolved',
                    },
                    {
                        value: '6',
                        label: 'Cancelled',
                    },
                ]}
            />

            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    (option?.label ?? '').includes(input)
                }
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '')
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={[
                    {
                        value: '1',
                        label: 'Not Identified',
                    },
                    {
                        value: '2',
                        label: 'Closed',
                    },
                    {
                        value: '3',
                        label: 'Communicated',
                    },
                    {
                        value: '4',
                        label: 'Identified',
                    },
                    {
                        value: '5',
                        label: 'Resolved',
                    },
                    {
                        value: '6',
                        label: 'Cancelled',
                    },
                ]}
            />

            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    (option?.label ?? '').includes(input)
                }
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '')
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={[
                    {
                        value: '1',
                        label: 'Not Identified',
                    },
                    {
                        value: '2',
                        label: 'Closed',
                    },
                    {
                        value: '3',
                        label: 'Communicated',
                    },
                    {
                        value: '4',
                        label: 'Identified',
                    },
                    {
                        value: '5',
                        label: 'Resolved',
                    },
                    {
                        value: '6',
                        label: 'Cancelled',
                    },
                ]}
            />
        </div>
    );
};

export default Calculator;
