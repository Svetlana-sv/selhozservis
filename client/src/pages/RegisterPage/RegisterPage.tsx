import Wrapper from '../../components/lib/Wrapper/Wrapper';
import './RegisterPage.css';
import {Button, Form, Input} from 'antd';
import React, {useState} from 'react';
import {useRegisterUserMutation} from '../../api/authApi';
import useAppDispatch from '../../hooks/use-app-dispatch';
import {message} from '../../message/message';
import {setUserToken} from '../../store/reducer/authSlice';
import {IoArrowBackOutline} from 'react-icons/all';
import {Text} from '../../components/lib/Typography/Typography';
import {Link} from 'react-router-dom';
import {LockOutlined, MailOutlined, UserOutlined} from '@ant-design/icons';

const RegisterPage = () => {
    const [register, {isLoading, isSuccess, error, isError}] =
        useRegisterUserMutation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');

    const dispatch = useAppDispatch();

    const submitForm = () => {
        if (email.length > 0 && password.length > 0) {
            // try {
            //     throw
            register({email, password, username})
                .unwrap()
                .then((response) => {
                    if (response.jwt) {
                        message({
                            text: `Вы зарегистрированы!`,
                            type: 'success',
                        });
                        dispatch(setUserToken(response.jwt));
                    } else {
                        message({text: `Ошибка!`, type: 'error'});
                    }
                })
            .catch((error) => message({text: `Ошибка! Проверьте уникальность данных.`, type: 'error'}))
            // } catch (error) {
            //     message({ text: `Ошибка!`, type: 'error' });
            //     let messageText = 'Unknown Error'
            //     if (error instanceof Error) messageText = error.message
            // }


        }
    };

    const onFinishFailed = (errorInfo: any) => {
        message({text: `Ошибка!`, type: 'error'});
    };

    return (
        <Wrapper>
            <Link to={'/authorization'}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '10px',
                    }}
                >
                    <IoArrowBackOutline/>
                    <Text align={'left'} fontSize={'16px'}>
                        Вернуться назад
                    </Text>
                </div>
            </Link>
            <div className="containerForm">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{remember: true}}
                    onFinish={submitForm}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста, введите логин!',
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <UserOutlined className="site-form-item-icon"/>
                            }
                            placeholder="Логин"
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста, введите e-mail!',
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <MailOutlined className="site-form-item-icon"/>
                            }
                            placeholder="E-mail"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста, введите пароль!',
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <LockOutlined className="site-form-item-icon"/>
                            }
                            type="password"
                            placeholder="Пароль"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            onClick={submitForm}
                            className="login-form-button"
                        >
                            Зарегистрироваться
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Wrapper>
    );
};

export default RegisterPage;
