import style from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


type DialogPropsType = {
    name: string
    id: number
    avaLink: string
}

const DialogItem = (props: DialogPropsType) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={style.dialog}>
            <div className={style.avatar}>
                <img src={props.avaLink} alt="avatar"/>
            </div>
            <div className={style.link}>
                <NavLink to={path}
                         className={dialogData => dialogData.isActive ? style.active : style.item}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem;
