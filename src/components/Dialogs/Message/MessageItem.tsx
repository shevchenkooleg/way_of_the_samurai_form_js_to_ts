import style from "./Message.module.css";
import React from "react";

type MessagePropsType = {
    message: string
}

const MessageItem = (props: MessagePropsType) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

export default MessageItem;
