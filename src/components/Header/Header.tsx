import React from "react";
import style from "./Header.module.css";

const Header = () => {
    return (
        <header className={style.header}>
            <img src="https://www.logodesign.net/logo/soccer-ball-with-spreading-wings-and-stars-4606ld.png"
                 alt="logo"/>
        </header>
    )
}

export default Header;
