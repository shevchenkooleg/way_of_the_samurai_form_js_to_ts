import style from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


type DialogPropsType = {
    name: string
    id: number
}

const Dialog = (props: DialogPropsType) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;
