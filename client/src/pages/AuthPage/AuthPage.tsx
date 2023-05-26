import Wrapper from '../../components/lib/Wrapper/Wrapper';
import './AuthPage.css';
import { Button, Checkbox, Form, Input } from 'antd';
import React, { useState } from 'react';
import { message } from '../../message/message';
import { setUserId, setUserToken } from '../../store/reducer/authSlice';
import { useAuthUserMutation } from '../../api/authApi';
import useAppDispatch from '../../hooks/use-app-dispatch';
import { Link, useNavigate } from 'react-router-dom';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import useAppSelector from '../../hooks/use-app-selector';
import { selectCart } from '../../store/reducer/cart';

const AuthPage = () => {
    const navigate = useNavigate();
    const [auth, { data }] = useAuthUserMutation();
    const cart = useAppSelector(selectCart);
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useAppDispatch();

    const submitFormAuth = () => {
        if (password.length > 0) {
            auth({ identifier, password })
                .unwrap()
                .then((reponse) => {
                    console.log();
                    if (reponse.jwt) {
                        console.log(reponse);
                        message({
                            text: `Вы авторизированы!`,
                            type: 'success',
                        });
                        dispatch(setUserToken(reponse.jwt));
                        dispatch(setUserId(reponse.user.id));
                        navigate(`/account`);
                        if (cart.length > 0) {
                            message({
                                text: `У Вас еще не оформлен заказ!`,
                                type: 'info',
                            });
                        }
                    } else {
                        onFinishFailed();
                    }
                });
        }
    };

    const onFinishFailed = () => {
        message({ text: `Ошибка!`, type: 'error' });
    };

    return (
        <Wrapper>
            <div className="containerForm">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={submitFormAuth}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="identifier"
                        rules={[
                            {
                                required: true,
                                message:
                                    'Пожалуйста, введите e-mail или логин!',
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <MailOutlined className="site-form-item-icon" />
                            }
                            placeholder="E-mail"
                            onChange={(e) => setIdentifier(e.target.value)}
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
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Пароль"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            noStyle
                        >
                            <Checkbox>Запомнить</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Забыли пароль
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            onClick={submitFormAuth}
                            className="login-form-button"
                        >
                            Авторизироваться
                        </Button>
                        Нет аккаунта?{' '}
                        <Link to={'/registration'}>Зарегистрироваться!</Link>
                    </Form.Item>
                </Form>
            </div>
        </Wrapper>
    );
};

export default AuthPage;
