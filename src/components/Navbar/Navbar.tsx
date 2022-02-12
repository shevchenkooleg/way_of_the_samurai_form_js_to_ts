import React from "react";
import style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {onlineStatusType} from "../../App";
import OnlineFriend from "./OnlineFriend/OnlineFriend";

type NavbarPropsType = {
    sideBar: {
        onlineStatus: Array<onlineStatusType>
    }
}

const Navbar = (props: NavbarPropsType) => {

    let onlineFriendsElement = props.sideBar.onlineStatus.map(s => s.isOnline ?
        <OnlineFriend name={s.name} avaLink={s.avaLink} isOnline={s.isOnline} id={s.userId}/> : null)

    return (
        <div className={style.content}>
            <nav className={style.nav}>
                <div className={style.item}>
                    <NavLink to='/profile'
                             className={navData => navData.isActive ? style.active : style.item}>Profile</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/dialogs'
                             className={navData => navData.isActive ? style.active : style.item}>Messages</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/users'
                             className={navData => navData.isActive ? style.active : style.item}>Users</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/news'
                             className={navData => navData.isActive ? style.active : style.item}>News</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/music'
                             className={navData => navData.isActive ? style.active : style.item}>Music</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/settings'
                             className={navData => navData.isActive ? style.active : style.item}>Settings</NavLink>
                </div>
            </nav>
            <div className={style.header}>Online Friends</div>
            <div className={style.onlineFriends}>

                {onlineFriendsElement}

            </div>
        </div>

    )
}

export default Navbar