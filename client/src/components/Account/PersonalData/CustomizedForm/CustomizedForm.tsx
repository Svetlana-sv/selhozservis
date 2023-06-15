import React from "react";
import {Form, Input} from "antd";
import style from './CustomizedForm.module.scss'
import {Type} from "../PersonalData";
export interface FieldData {
    name: string | number | (string | number)[];
    value?: any;
}
interface CustomizedFormProps {
    onChange: (fields: FieldData[]) => void;
    fields: FieldData[];
    type: Type;
}
const CustomizedForm: React.FC<CustomizedFormProps> = ({
                                                           onChange,
                                                           fields,
    type
                                                       }) => (
    <Form
        name="global_state"
        layout="inline"
        className={style.form}
        fields={fields}
        onFieldsChange={(_, allFields) => {
            onChange(allFields);
        }}
    >
        <Form.Item
            name="last_name"
            label="Фамилия"
            rules={[
                { required: true, message: 'Пожалуйста, введите фамилию!' },
            ]}
        >
            <Input placeholder={'Введите фамилию'} />
        </Form.Item>
        <Form.Item
            name="name"
            label="Имя"
            rules={[{ required: true, message: 'Пожалуйста, введите имя!' }]}
        >
            <Input placeholder={'Введите имя'} />
        </Form.Item>
        <Form.Item
            name="middle_name"
            label="Отчество"
            rules={[
                { required: false, message: 'Пожалуйста, введите отчество!' },
            ]}
        >
            <Input placeholder={'Введите отчество'} />
        </Form.Item>
        <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Пожалуйста, введите email!' }]}
        >
            <Input placeholder={'Введите email'} />
        </Form.Item>
        <Form.Item
            name="number"
            label="Телефон"
            rules={[
                {
                    required: true,
                    message: 'Пожалуйста, введите номер телефона!',
                },
            ]}
        >
            <Input placeholder={'Введите номер телефона'} />
        </Form.Item>
        {
            type === Type.LEGAL_PERSON &&
            <Form.Item
                name="inn"
                label="ИНН"
                rules={[
                    {
                        required: true,
                        message: 'Введите ИНН!',
                    },
                ]}
            >
                <Input placeholder={'Введите ИНН'} />
            </Form.Item>
        }
        {
            type === Type.LEGAL_PERSON &&
            <Form.Item
                name="company_name"
                label="Компания"
                rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, введите название компании!',
                    },
                ]}
            >
                <Input placeholder={'Введите название компании'} />
            </Form.Item>
        }

    </Form>
);

export default CustomizedForm