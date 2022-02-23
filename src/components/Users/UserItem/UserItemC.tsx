import React from 'react';
import style from './UserItem.module.css'


class UserItemC extends React.Component<any, any> {
    render() {
        return (
            <div className={style.userDataBlock}>
                <div className={style.avatar}>
                    <img src={this.props.avaLink} alt="avatar"/>
                    {this.props.followed ?
                        <button onClick={() => {this.props.unfollow(this.props.userId)}}>Unfollow</button> :
                        <button onClick={() => {this.props.follow(this.props.userId)}}>Follow</button>
                    }
                </div>
                <div className={style.content}>
                    <div className={style.name}>{this.props.fullName}</div>
                    <div className={style.status}>{this.props.status}</div>
                    <div className={style.country}>{this.props.location.country},</div>
                    <div className={style.city}>{this.props.location.city}</div>
                </div>
            </div>
        );
    }
}

export default UserItemC;