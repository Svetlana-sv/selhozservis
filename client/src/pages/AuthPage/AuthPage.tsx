import Wrapper from "../../components/lib/Wrapper/Wrapper";
import style from "../Account/Account.module.scss";
import {Button, Form, Input} from "antd";
import React, {useState} from "react";
import {message} from "../../message/message";
import {setUserToken} from "../../store/reducer/authSlice";
import {useAuthUserMutation, useRegisterUserMutation} from "../../api/authApi";
import useAppDispatch from "../../hooks/use-app-dispatch";
import {Link, useNavigate} from "react-router-dom";

const AuthPage = () => {
    const navigate = useNavigate();
    const [auth, {data}] =
        useAuthUserMutation();

    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useAppDispatch();

    const submitFormAuth = () => {
        if (password.length > 0){
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


    return <Wrapper>
        {/*<div className={style.form}>*/}
        <div>
            <Form
                name="auth"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={submitFormAuth}
                onFinishFailed={onFinishFailed }
                autoComplete="off"
            >
                {/*<Form.Item*/}
                {/*    label="Логин"*/}
                {/*    name="username"*/}
                {/*    rules={[{ required: true, message: 'Пожалуйста введите логин!' }]}*/}
                {/*>*/}
                {/*    <Input onChange={(e) => setUserName(e.target.value)}/>*/}
                {/*</Form.Item>*/}

                <Form.Item
                    label="E-mail"
                    name="identifier"
                    rules={[{ required: true, message: 'Пожалуйста введите e-mail!' }]}
                >
                    <Input onChange={(e) => setIdentifier(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}
                >
                    <Input.Password onChange={(e) => setPassword(e.target.value)}/>
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" onClick={submitFormAuth}>
                        Авторизироваться
                    </Button>
                </Form.Item>
            </Form>
            <Link to={"/registration"}>Зарегистрироваться...</Link>
        </div>
    </Wrapper>
}

export default AuthPage