import React from 'react';
import s from './LoginFormik.module.css'
import style from "../Profile/Posts/NewPostForm/NewPostForm.module.css";
import { useFormik } from 'formik';

type LoginFormikPropsType = {
    makeLogIn: (email: string, password: string, rememberMe: boolean) => void
}
type LoginFormValuesType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginFormik = (props: LoginFormikPropsType) => {

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            rememberMe: false
        },
        onSubmit: (values, actions) => {
            props.makeLogIn(values.login, values.password, values.rememberMe)
            actions.resetForm({values: {login: '', password: '', rememberMe: false}})
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={s.content}>
                <h1>Login</h1>
                <div className={s.form}>
                    <label htmlFor="login">Login</label>
                    <input type="string"
                           id="login"
                           name="login"
                           onChange={formik.handleChange}
                           value={formik.values.login}/>
                    {/*/!*<ErrorMessage name="email" component="div"/>*!/*/}
                    <label htmlFor="password">Password</label>
                    <input type="password"
                           id="password"
                           name="password"
                           onChange={formik.handleChange}
                           value={formik.values.password}/>
                    <label htmlFor="rememberMe">rememberMe</label>
                    <input type="checkbox"
                           id="rememberMe"
                           name="rememberMe"
                           onChange={formik.handleChange}
                           checked={formik.values.rememberMe}/>
                    {/*/!*<ErrorMessage name="password" component="div"/>*!/*/}
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </div>

        </form>
    )
};

export default LoginFormik;