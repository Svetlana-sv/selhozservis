import {useRegisterUserMutation} from "../../api/authApi";
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form'
import useAppDispatch from "../../hooks/use-app-dispatch";
import {useState} from "react";
import {settingsSharp} from "ionicons/icons";
// import useAppDispatch from "../../../hooks/use-app-dispatch";

const Account = () => {
    const [register, {isLoading, isSuccess, error, isError}] =
        useRegisterUserMutation();
    const dispatch = useAppDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');

    // const submitForm : SubmitHandler<RegisterInput> = (values) => {
    //   data.
    //   register(data).unwrap().then((response) => {
    //     if (response.s)
    //   }).
    //   console.log(data.email)
    //   useRegisterUserMutation(data)
    // }
    //

    const submitForm = (event: React.FormEvent) => {
        event.preventDefault();
        if (email.length > 0 && password.length > 0){
            register({email, password, username})
                .unwrap()
                .then(reponse => {
                    if (reponse.token) {
                        // OK
                    } else {
                        // ERROR
                    }
                })
        }
    }


    return <>
        <form onSubmit={submitForm}>
            <p>UserName</p>
            <input type="text" onChange={(e) => setUserName(e.target.value)} required/>
            <p>Login</p>
            <input type="email" onChange={(e) => setEmail(e.target.value)} required/>
            <p>Password</p>
            <input type='password'
                   onChange={(e) => setPassword(e.target.value)}
                   required/>
            <button type='submit'>Зарегистрироваться</button>
        </form>
    </>
}

export default Account;