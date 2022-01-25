import style from "./MessageItem.module.css";
import React from "react";
import {findAllByDisplayValue} from "@testing-library/react";

type MessagePropsType = {
    message: string
    id: number
    avatarImage: string
}

const MessageItem = (props: MessagePropsType) => {
    let a = props.id
    if (a === 0) {
        return (
            <div className={style.content}>
                <div className={style.contentImage}>
                    <img src={props.avatarImage} alt="avatar"/>
                </div>
                <div className={style.message}>{props.message}</div>
            </div>
        )
    } else {
        return (
            <div className={style.contentAlien}>
                <div className={style.contentImage}><img src={props.avatarImage} alt="avatar"/></div>
                <div className={style.message}>{props.message}</div>
            </div>

        )
    }





}

export default MessageItem;
