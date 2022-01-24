import React from "react";
import style from './OnlineFriend.module.css'

type OnlineFriendPropsType = {
    name: string
    avaLink: string
    isOnline: boolean
}


const OnlineFriend = (props: OnlineFriendPropsType) => {

    return (
        <div className={style.content}>
            <div className={style.avatarImage}>
                <img src={props.avaLink} alt=""/>
            </div>
            <div className={style.name}>{props.name}</div>
        </div>

    )


}

export default OnlineFriend;
