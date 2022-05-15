import React from 'react';
import s from './LoginForm.module.css'
import {useFormik} from 'formik';
import {LoginValidationSchema} from "../../../utils/validators/validators";
import Input from '../../common/Input/Input';

type LoginFormikPropsType = {
    makeLogIn: (email: string, password: string, rememberMe: boolean, setStatus: (error: string) => void) => void
}
type LoginFormValuesType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: LoginFormikPropsType) => {

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            rememberMe: false
        },
        validationSchema: LoginValidationSchema,
        onSubmit: (values, actions) => {
            props.makeLogIn(values.login, values.password, values.rememberMe, actions.setStatus)
            actions.resetForm({values: {login: '', password: '', rememberMe: false}})
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={s.form}>
                <label htmlFor="login">Login</label>
                <Input type="string"
                       id="login"
                       name="login"
                       onChange={formik.handleChange}
                       value={formik.values.login}
                       onBlur={formik.handleBlur}
                       error={formik.errors.login}
                       touched={formik.touched.login}/>
                <label htmlFor="password">Password</label>
                <Input type="password"
                       id="password"
                       name="password"
                       onChange={formik.handleChange}
                       value={formik.values.password}
                       onBlur={formik.handleBlur}
                       error={formik.errors.password}
                       touched={formik.touched.password}/>
                <label htmlFor="rememberMe">rememberMe</label>
                <input type="checkbox"
                       id="rememberMe"
                       name="rememberMe"
                       onChange={formik.handleChange}
                       checked={formik.values.rememberMe}/>
                {(formik.status) ? <div className={s.error}>{formik.status.error}</div> : null}
                <button type="submit">
                    Submit
                </button>
            </div>

        </form>
    )
};

export default LoginForm;