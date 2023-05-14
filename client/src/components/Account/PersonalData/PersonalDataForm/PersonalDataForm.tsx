import {Input, Radio, RadioChangeEvent, Space} from "antd";
import React, {useState} from "react";
import style from './PersonalDataForm.module.scss'
import {Text} from '../../../lib/Typography/Typography'

const PersonalDataForm = () => {
    const [value, setValue] = useState(2);

    const handleChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };
    return <div className={style.personalDataForm}>
        <div className={style.typeBlock}>
            <Text align={'left'} fontSize={'16px'} weight={'300'} margin={'5px 0px'}>Выберите тип:</Text>
            <Radio.Group onChange={handleChange} value={value}>
                <Space direction="vertical">
                    {/*<Radio value={1}>Физическое лицо</Radio>*/}
                    <Radio value={2}>Юридическое лицо</Radio>
                </Space>
            </Radio.Group>
        </div>
        <div className={style.informationBlock}>
            <div>
                <label htmlFor="">Электронная почта</label>
                <Input placeholder="Введите e-mail"/>
            </div>
            <div>
                <label htmlFor="">Телефон</label>
                <Input placeholder="Введите номер телефона"/>
            </div>

            <div>
                <label htmlFor="">Фамилия</label>
                <Input placeholder="Введите фамилию"/>
            </div>
            <div>
                <label htmlFor="">Имя</label>
                <Input placeholder="Введите имя"/>
            </div>
            <div>
                <label htmlFor="">Отчество</label>
                <Input placeholder="Введите отчество"/>
            </div>
        </div>
    </div>
}

export default PersonalDataForm