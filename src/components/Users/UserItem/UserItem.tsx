import React from 'react';
import {locationType} from "../../../redux/redux-store";
import style from './UserItem.module.css'

type UserItemPropsType = {
    userId: number
    avaLink: string
    followed: boolean
    isOnline: boolean
    fullName: string
    status: string
    location: locationType
    follow: (userId:number) => void
    unfollow: (userId:number) => void
}

const UserItem = (props: UserItemPropsType) => {
    return (
        <div className={style.userDataBlock}>
            <div className={style.avatar}>
                <img src={props.avaLink} alt="avatar"/>
                {props.followed ? <button onClick={() => {
                    props.unfollow(props.userId)
                }}>Unfollow</button> : <button onClick={() => {
                    props.follow(props.userId)
                }}>Follow</button>}
            </div>
            <div className={style.content}>
                <div className={style.name}>{props.fullName}</div>
                <div className={style.status}>{props.status}</div>
                <div className={style.country}>{props.location.country},</div>
                <div className={style.city}>{props.location.city}</div>
            </div>
        </div>
    );
};

export default UserItem;