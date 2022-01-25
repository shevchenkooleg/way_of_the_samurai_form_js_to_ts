import React from "react";
import style from './OnlineFriend.module.css'
import {NavLink} from "react-router-dom";

type OnlineFriendPropsType = {
    name: string
    avaLink: string
    isOnline: boolean
    id: number
}


const OnlineFriend = (props: OnlineFriendPropsType) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={style.content}>
            <div className={style.avatarImage}>
                <img src={props.avaLink} alt=""/>
            </div>
            <div className={style.linkName}>
                <NavLink to={path} className={navData => navData.isActive ? style.active : style.item}> {props.name}</NavLink>
            </div>
        </div>

    )


}

export default OnlineFriend;
