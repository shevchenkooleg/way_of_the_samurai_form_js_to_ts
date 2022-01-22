import React from "react";
import style from "./Header.module.css";

const Header = () => {
    return (
        <header className={style.header}>
            <img src="https://velikorodnov.com/dev/devmatebook/wp-content/themes/matebook/assets/images/logo@2x.png"
                 alt="logo"/>
        </header>
    )
}

export default Header;
