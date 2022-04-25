import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './UserItem.module.css'
import {Dispatch} from "redux";

type UserItemPropsType = {
    avaLink: string,
    followed: boolean,
    userId: number,
    status: string | null,
    fullName: string
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

class UserItem extends React.Component<UserItemPropsType> {
    render() {
        return (
            <div className={style.userDataBlock}>
                <div className={style.avatar}>
                    <NavLink to={'/profile/' + this.props.userId}>
                        <img src={this.props.avaLink} alt="avatar"/>
                    </NavLink>
                    {this.props.followed
                        ? <button disabled={this.props.followingInProgress.some(id => id == this.props.userId)} onClick={() => {
                            this.props.unfollow(this.props.userId)}}>Unfollow</button>
                        : <button disabled={this.props.followingInProgress.some(id => id == this.props.userId)} onClick={() => {
                            this.props.follow(this.props.userId)}}>Follow</button>
                    }
                </div>
                <div className={style.content}>
                    <div className={style.name}>{this.props.fullName}</div>
                </div>
            </div>
        );
    }
}

export default UserItem;