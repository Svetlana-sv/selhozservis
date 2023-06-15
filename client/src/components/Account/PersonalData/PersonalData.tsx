import Wrapper from '../../lib/Wrapper/Wrapper';
import style from './PersonalData.module.scss';
import {Button} from '../../lib/Button/Button';
import React, {useEffect, useState} from 'react';
import {Form, Input, Radio, Space} from 'antd';
import useAppSelector from '../../../hooks/use-app-selector';
import {selectUserId} from '../../../store/reducer/authSlice';
import {
    useGetUserInfoQuery,
    useUpdateUserInfoMutation,
} from '../../../api/userApi';
import {Text} from '../../lib/Typography/Typography';
import CustomizedForm, {FieldData} from "./CustomizedForm/CustomizedForm";
import {message} from "../../../message/message";
import {text} from "ionicons/icons";

export enum Type {
    INDIVIDUAL = 1,
    LEGAL_PERSON = 2,
}

const PersonalData = () => {
    const userId = useAppSelector(selectUserId);
    const {data: userInfo} = useGetUserInfoQuery(userId);

    const [fields, setFields] = useState<FieldData[]>([
        {
            name: ['last_name'],
            value: `${userInfo?.last_name || ''}`,
        },
        {name: ['name'], value: `${userInfo?.name || ''}`},
        {name: ['middle_name'], value: `${userInfo?.middle_name || ''}`},
        {
            name: ['number'],
            value: `${userInfo?.number || ''}`,
        },
        {name: ['email'], value: `${userInfo?.email || ''}`},
    ]);
    const [newUserInfo] = useUpdateUserInfoMutation();
    const [type, setType] = useState(
        (userInfo?.type) === 'Физическое лицо'
            ? Type.INDIVIDUAL
            : Type.LEGAL_PERSON
    );
    console.log(userInfo?.type)
    console.log(type)
    useEffect(() => {
        if (type === Type.INDIVIDUAL){
            setFields([
                {
                    name: ['last_name'],
                    value: `${userInfo?.last_name || ''}`,
                },
                {name: ['name'], value: `${userInfo?.name || ''}`},
                {name: ['middle_name'], value: `${userInfo?.middle_name || ''}`},
                {
                    name: ['number'],
                    value: `${userInfo?.number || ''}`,
                },
                {name: ['email'], value: `${userInfo?.email || ''}`},
                {name: ['inn'], value: ``},
                {name: ['company_name'], value: ``},
            ]);
        } else{
            setFields([
                {
                    name: ['last_name'],
                    value: `${userInfo?.last_name || ''}`,
                },
                {name: ['name'], value: `${userInfo?.name || ''}`},
                {name: ['middle_name'], value: `${userInfo?.middle_name || ''}`},
                {
                    name: ['number'],
                    value: `${userInfo?.number || ''}`,
                },
                {name: ['email'], value: `${userInfo?.email || ''}`},
                {name: ['inn'], value: `${userInfo?.inn || ''}`},
                {name: ['company_name'], value: `${userInfo?.company_name || ''}`},
            ]);
        }

    }, [userInfo,type]);

    const handleUpdateData = () => {
        console.log(fields)
        newUserInfo({
            id: userId,
            data: {
                name: fields[1].value,
                type:
                    type === Type.INDIVIDUAL
                        ? 'Физическое лицо'
                        : 'Юридическое лицо',
                last_name: fields[0].value,
                email: fields[3].value,
                middle_name: fields[2].value,
                number: fields[4].value,
                inn: fields[5].value,
                company_name: fields[6].value,
            },
        })
            .unwrap()
            .then((response) => {
                    if (response.isError) {
                        message({text: 'Ошибка!', type: 'error'})
                    } else {
                        message({text: 'Данные успешно изменены!', type: 'success'})
                    }
                }
            )
    };



    return (
        <Wrapper>
            <div className={style.container}>
                <div className={style.typeBlock}>
                    <Text
                        align={'left'}
                        fontSize={'14px'}
                        weight={'600'}
                        margin={'5px 0px'}
                    >
                        Выберите тип:
                    </Text>
                    <Radio.Group
                        onChange={(e) => setType(e.target.value)}
                        value={type}
                        className={style.radioGroup}
                    >
                        <Space direction="horizontal">
                            {/*<Radio value={Type.INDIVIDUAL} disabled={true}>Физическое лицо</Radio>*/}
                            <Radio value={Type.INDIVIDUAL}>Физическое лицо</Radio>
                            <Radio value={Type.LEGAL_PERSON}>Юридическое лицо</Radio>
                        </Space>
                    </Radio.Group>
                </div>
                <CustomizedForm
                    fields={fields}
                    onChange={(newFields) => {
                        setFields(newFields);
                    }}
                    type={type}
                />
                <Button
                    onClick={handleUpdateData}
                    className={style.buttonUpdate}
                >
                    Обновить данные
                </Button>
            </div>
        </Wrapper>
    );
};

export default PersonalData;
