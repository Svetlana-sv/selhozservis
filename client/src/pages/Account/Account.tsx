import {useAuthUserMutation, useRegisterUserMutation} from "../../api/authApi";
import useAppDispatch from "../../hooks/use-app-dispatch";
import {useState} from "react";
import React from "react";
import {message} from "../../message/message";
import style from './Account.module.scss'
import {Button, Form, Input, Modal} from "antd";
import Wrapper from "../../components/lib/Wrapper/Wrapper";
import { selectUserToken, setUserToken } from "../../store/reducer/authSlice";
import useAppSelector from "../../hooks/use-app-selector";

const Account = () => {
      return <Wrapper>
        <div>
            Личная информация
            Избранное
            История заказов
        </div>
    </Wrapper>
}

export default Account;