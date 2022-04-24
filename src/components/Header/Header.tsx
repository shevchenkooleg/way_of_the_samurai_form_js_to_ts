import React from "react";
import { NavLink } from "react-router-dom";
import { AuthDataType } from "../../redux/redux-store";
import style from "./Header.module.css";

type HeaderPropsType = AuthDataType & {
    setAuthData: (id:string, email:string, login:string) => void
}

const Header = (props: HeaderPropsType) => {

    return (
        <header className={style.header}>
            <img src="https://velikorodnov.com/dev/devmatebook/wp-content/themes/matebook/assets/images/logo@2x.png"
                 alt="logo"/>
            <div className={style.loginBlock}>
                {props.isAuth ? <span className={style.userLogin}>{props.login}</span> : <NavLink to='/login'>Login</NavLink>}
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/391px-Apple_logo_black.svg.png" alt=""/>
            </div>
        </header>
    )
}

export default Header;
