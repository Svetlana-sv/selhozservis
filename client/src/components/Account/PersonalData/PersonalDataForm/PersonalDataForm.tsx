import { Input, Radio, RadioChangeEvent, Space } from 'antd';
import React, { useState } from 'react';
import style from './PersonalDataForm.module.scss';
import { Text } from '../../../lib/Typography/Typography';
import { useGetUserInfoQuery } from '../../../../api/userApi';
import useAppSelector from '../../../../hooks/use-app-selector';
import { selectUserId } from '../../../../store/reducer/authSlice';
import { IUserInfo } from '../../../../api/types/user';

const PersonalDataForm = (props: {
    setUserInfo?: (userInfo: IUserInfo) => void;
}) => {
    const [value, setValue] = useState(2);
    const userId = useAppSelector(selectUserId);
    const { data: userInfo } = useGetUserInfoQuery(userId);
    // todo put reguest to change userInfo
    // todo post reguest to add Order and OrderProducts
    // props.setUserInfo({name:userInfo?.data.attributes.name, last_name:userInfo?.data.attributes.last_name,
    //     middle_name:userInfo?.data.attributes.middle_name, email:userInfo?.data.attributes.user.data.attributes.email, number:userInfo?.data.attributes.number});
    const handleChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };

    // const [form] = Form.useForm<{ name: string; age: number }>();
    //
    // const submitForm = () => {
    //     // if (email.length > 0 && password.length > 0){
    //     //     register({email, password, username})
    //     //         .unwrap()
    //     //         .then(reponse => {
    //     //             if (reponse.token) {
    //     //                 message({text: `Вы зарегистрированы!`, type: 'success'})
    //     //                 dispatch(setUserToken(reponse.token))
    //     //             } else {
    //     //                 message({text: `Ошибка!`, type: 'error'})
    //     //             }
    //     //         })
    //     // }
    // }
    return (
        <div className={style.personalDataForm}>
            <div className={style.typeBlock}>
                <Text
                    align={'left'}
                    fontSize={'16px'}
                    weight={'300'}
                    margin={'5px 0px'}
                >
                    Выберите тип:
                </Text>
                <Radio.Group onChange={handleChange} value={value}>
                    <Space direction="vertical">
                        <Radio value={1} disabled={true}>
                            Физическое лицо
                        </Radio>
                        <Radio value={2}>Юридическое лицо</Radio>
                    </Space>
                </Radio.Group>
            </div>
            <div className={style.informationBlock}>
                <div>
                    <label htmlFor="">Электронная почта</label>
                    <Input
                        placeholder="Введите e-mail"
                        value={
                            userInfo?.data.attributes.user?.data.attributes
                                .email
                        }
                        // onChange={(e) => props.setUserInfo(email.e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="">Телефон</label>
                    <Input
                        placeholder="Введите номер телефона"
                        value={userInfo?.data.attributes.number}
                    />
                </div>

                <div>
                    <label htmlFor="">Фамилия</label>
                    <Input
                        placeholder="Введите фамилию"
                        value={userInfo?.data.attributes.last_name}
                    />
                </div>
                <div>
                    <label htmlFor="">Имя</label>
                    <Input
                        placeholder="Введите имя"
                        value={userInfo?.data.attributes.name}
                    />
                </div>
                <div>
                    <label htmlFor="">Отчество</label>
                    <Input
                        placeholder="Введите отчество"
                        value={userInfo?.data.attributes.middle_name}
                    />
                </div>
                {/*<Form*/}
                {/*    className="login-form"*/}
                {/*    form={form}*/}
                {/*    initialValues={{remember: true}}*/}
                {/*    layout="vertical"*/}
                {/*    // onFinish={submitForm}*/}
                {/*    // onFinishFailed={onFinishFailed }*/}
                {/*>*/}
                {/*    <Form.Item*/}
                {/*        name="email"*/}
                {/*        label="Электронная почта"*/}
                {/*        rules={[{required: false, message: 'Пожалуйста, введите email!'}]}*/}
                {/*    >*/}
                {/*        <Input placeholder="Введите e-mail"*/}
                {/*               />*/}
                {/*    </Form.Item>*/}

                {/*    <Form.Item*/}
                {/*        name="number"*/}
                {/*        label="Телефон"*/}
                {/*        rules={[{required: false, message: 'Пожалуйста, введите номер телефона!'}]}*/}
                {/*    >*/}
                {/*        <Input placeholder="Введите номер телефона"*/}
                {/*        />*/}
                {/*    </Form.Item>*/}

                {/*    <Form.Item*/}
                {/*        name="last_name"*/}
                {/*        label="Фамилия"*/}
                {/*        rules={[{required: false, message: 'Пожалуйста, введите фамилию!'}]}*/}
                {/*    >*/}
                {/*        <Input placeholder="Введите фамилию"*/}
                {/*        />*/}
                {/*    </Form.Item>*/}

                {/*    <Form.Item*/}
                {/*        name="middle_name"*/}
                {/*        label="Отчество"*/}
                {/*        rules={[{required: false, message: 'Пожалуйста, введите отчество!'}]}*/}
                {/*    >*/}
                {/*        <Input placeholder="Введите отчество"*/}
                {/*        />*/}
                {/*    </Form.Item>*/}

                {/*    <Form.Item*/}
                {/*        name="name"*/}
                {/*        label="Имя"*/}
                {/*        rules={[{required: false, message: 'Пожалуйста, введите имя!'}]}*/}
                {/*    >*/}
                {/*        <Input placeholder="Введите имя"*/}
                {/*        />*/}
                {/*    </Form.Item>*/}

                {/*    /!*<Form.Item*!/*/}
                {/*    /!*    name="email"*!/*/}
                {/*    /!*    rules={[{required: true, message: 'Пожалуйста, введите e-mail!'}]}*!/*/}
                {/*    /!*>*!/*/}
                {/*    /!*    <Input prefix={<MailOutlined className="site-form-item-icon"/>} placeholder="E-mail"*!/*/}
                {/*    /!*           onChange={(e) => setEmail(e.target.value)}/>*!/*/}
                {/*    /!*</Form.Item>*!/*/}
                {/*    /!*<Form.Item*!/*/}
                {/*    /!*    name="password"*!/*/}
                {/*    /!*    rules={[{required: true, message: 'Пожалуйста, введите пароль!'}]}*!/*/}
                {/*    /!*>*!/*/}
                {/*    /!*    <Input*!/*/}
                {/*    /!*        prefix={<LockOutlined className="site-form-item-icon"/>}*!/*/}
                {/*    /!*        type="password"*!/*/}
                {/*    /!*        placeholder="Пароль"*!/*/}
                {/*    /!*        onChange={(e) => setPassword(e.target.value)}*!/*/}
                {/*    /!*    />*!/*/}
                {/*    /!*</Form.Item>*!/*/}

                {/*    <Form.Item>*/}
                {/*        <Button type="primary" onClick={submitForm} className="login-form-button">*/}
                {/*            Обновить данные*/}
                {/*        </Button>*/}
                {/*    </Form.Item>*/}
                {/*</Form>*/}
            </div>
        </div>
    );
};

export default PersonalDataForm;
