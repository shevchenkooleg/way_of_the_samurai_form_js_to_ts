import React from 'react';
import {locationType} from "../../../redux/redux-store";
import style from './UserItem.module.css'

type UserItemPropsType = {
    userID: number
    avaLink: string
    followed: boolean
    isOnline: boolean
    fullName: string
    status: string
    location: locationType
}

const UserItem = (props: UserItemPropsType) => {
    return (
        <div className={style.userDataBlock}>
            <div className={style.avatar}>
                <img src={props.avaLink} alt="avatar"/>
                <button>Follow</button>
            </div>
            <div className={style.content}>
                <div>{props.fullName}</div>
                <div>{props.status}</div>
            </div>
        </div>
    );
};

export default UserItem;