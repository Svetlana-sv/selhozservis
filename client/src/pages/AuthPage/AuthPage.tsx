import Wrapper from "../../components/lib/Wrapper/Wrapper";
import './AuthPage.css';
import {Button, Checkbox, Form, Input} from "antd";
import React, {useState} from "react";
import {message} from "../../message/message";
import {setUserToken} from "../../store/reducer/authSlice";
import {useAuthUserMutation, useRegisterUserMutation} from "../../api/authApi";
import useAppDispatch from "../../hooks/use-app-dispatch";
import {Link, useNavigate} from "react-router-dom";
import {LockOutlined, MailOutlined, UserOutlined} from "@ant-design/icons";

const AuthPage = () => {
    const navigate = useNavigate();
    const [auth, {data}] =
        useAuthUserMutation();

    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useAppDispatch();

    const submitFormAuth = () => {
        if (password.length > 0) {
            auth({identifier, password})
                .unwrap()
                .then(reponse => {
                    console.log()
                    if (reponse.jwt) {
                        message({text: `Вы авторизированы!`, type: 'success'})
                        dispatch(setUserToken(reponse.jwt))
                        navigate(`/account`)
                    } else {
                        onFinishFailed()
                    }
                })
        }
    }

    const onFinishFailed = () => {
        message({text: `Ошибка!`, type: 'error'})
    };


    return (
        <Wrapper>
            <div className="container">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{remember: true}}
                    onFinish={submitFormAuth}
                    onFinishFailed={onFinishFailed }
                >
                    <Form.Item
                        name="identifier"
                        rules={[{required: true, message: 'Пожалуйста, введите e-mail или логин!'}]}
                    >
                        <Input prefix={<MailOutlined className="site-form-item-icon"/>} placeholder="E-mail"
                               onChange={(e) => setIdentifier(e.target.value)}/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{required: true, message: 'Пожалуйста, введите пароль!'}]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Пароль"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Запомнить</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Забыли пароль
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" onClick={submitFormAuth} className="login-form-button">
                            Авторизироваться
                        </Button>
                        Нет аккаунта? <Link to={"/registration"}>Зарегистрироваться!</Link>
                    </Form.Item>
                </Form>
            </div>
        </Wrapper>
    );
}

export default AuthPage