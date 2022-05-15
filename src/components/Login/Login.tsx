import React from 'react';
import s from "./Login.module.css";
import LoginForm from "./LoginForm/LoginForm";
import {Navigate} from "react-router-dom";

type LoginPropsType = {
    isAuth: boolean
    makeLogIn: (email: string, password: string, rememberMe: boolean, setStatus: (error: string) => void) => void
}

export const Login = (props: LoginPropsType) => {
    if (props.isAuth) {
        return <Navigate to={'/profile'}></Navigate>
    }

    return (
        <div>
            <div className={s.content}>
                <h2>Login</h2>
                <LoginForm makeLogIn={props.makeLogIn}/>
            </div>
        </div>
    );
};