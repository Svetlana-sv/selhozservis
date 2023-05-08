import Wrapper from "../../components/lib/Wrapper/Wrapper";
import style from "../Account/Account.module.scss";
import {Button, Form, Input} from "antd";
import React, {useState} from "react";
import {useAuthUserMutation, useRegisterUserMutation} from "../../api/authApi";
import useAppDispatch from "../../hooks/use-app-dispatch";
import {message} from "../../message/message";
import {setUserToken} from "../../store/reducer/authSlice";
import {IoArrowBackOutline} from "react-icons/all";
import {Text} from "../../components/lib/Typography/Typography";
import {Link} from "react-router-dom";

const RegisterPage = () => {
    const [register, {isLoading, isSuccess, error, isError}] =
        useRegisterUserMutation();
    const [auth, {data}] =
        useAuthUserMutation();
    const [email, setEmail] = useState('');
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');

    const dispatch = useAppDispatch();

    const submitForm = () => {
        if (email.length > 0 && password.length > 0){
            register({email, password, username})
                .unwrap()
                .then(reponse => {
                    if (reponse.token) {
                        message({text: `Вы зарегистрированы!`, type: 'success'})
                        dispatch(setUserToken(reponse.token))
                    } else {
                        message({text: `Ошибка!`, type: 'error'})
                    }
                })
        }
    }

    const onFinishFailed = (errorInfo: any) => {
        message({text: `Ошибка!`, type: 'error'})
    };

    return <Wrapper>
        <Link to={'/authorization'}><div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}><IoArrowBackOutline/><Text align={'left'}>Вернуться назад</Text></div></Link>
        <div className={style.form}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={submitForm}
                onFinishFailed={onFinishFailed }
                autoComplete="off"
            >
                <Form.Item
                    label="Логин"
                    name="username"
                    rules={[{ required: true, message: 'Пожалуйста введите логин!' }]}
                >
                    <Input onChange={(e) => setUserName(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label="E-mail"
                    name="email"
                    rules={[{ required: true, message: 'Пожалуйста введите e-mail!' }]}
                >
                    <Input onChange={(e) => setEmail(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}
                >
                    <Input.Password onChange={(e) => setPassword(e.target.value)}/>
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Зарегистрироваться
                    </Button>
                </Form.Item>
            </Form>
            {/*<a href="">Зарегистрироваться</a>*/}
        </div>
    </Wrapper>
}

export default RegisterPage