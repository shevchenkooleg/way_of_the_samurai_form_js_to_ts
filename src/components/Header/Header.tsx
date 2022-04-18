import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import {AuthDataType} from "../../redux/auth-reducer";

type HeaderPropsType = AuthDataType & {
    setAuthData: (id:string, email:string, login:string) => void
}

const Header = (props: HeaderPropsType) => {

    // console.log(props)

    return (
        <header className={style.header}>
            <img src="https://velikorodnov.com/dev/devmatebook/wp-content/themes/matebook/assets/images/logo@2x.png"
                 alt="logo"/>
            <div className={style.loginBlock}>
                {/*{props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>}*/}
                {props.isAuth ? <span className={style.userLogin}>{props.login}</span> : <NavLink to='/login'>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header;
