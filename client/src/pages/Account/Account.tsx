import {useRegisterUserMutation} from "../../api/authApi";
import useAppDispatch from "../../hooks/use-app-dispatch";
import {useState} from "react";
import React from "react";
import {message} from "../../message/message";
import style from './Account.module.scss'
import {Button, Form, Input} from "antd";
import Wrapper from "../../components/lib/Wrapper/Wrapper";

const Account = () => {
    const [register, {isLoading, isSuccess, error, isError}] =
        useRegisterUserMutation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');

    const submitForm = () => {
        if (email.length > 0 && password.length > 0){
            register({email, password, username})
                .unwrap()
                .then(reponse => {
                    if (reponse.token) {
                        message({text: `Вы зарегистрированы!`, type: 'success'})
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
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </div>

        <h2>Личный кабинет</h2>
        <div>
            Личная информация
            Избранное
            История заказов
        </div>
    </Wrapper>
}

export default Account;