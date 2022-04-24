import React from 'react';
import UserItem from './UserItem/UserItem';
import style from './Users.module.css'
import {usersFromServerType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type UsersPropsType = {
    users: Array<usersFromServerType>
    pagesForPagination: number[]
    currentPage: number
    pagesCount: number
    followingInProgress: Array<number>
    avaLinkArray: string[]
    follow: (userId: number) => (dispatch: Dispatch) => void
    unfollow: (userId: number) => (dispatch: Dispatch) => void
    onPageChanged: (newPage: number) => void
}

const Users = (props: UsersPropsType) => {
    return (
        <div className={style.content}>
            <div className={style.pagination}>
                <span className={style.unselectedPage} onClick={()=>props.onPageChanged(1)}>{'<'}</span>
                {props.pagesForPagination.map( (p, i) => {
                    return <span key={i} onClick={()=>{ props.onPageChanged(p) }}
                                 className={props.currentPage === p ? style.selectedPage : style.unselectedPage}>{p}</span>
                })}
                <span className={style.unselectedPage} onClick={()=>props.onPageChanged(props.pagesCount)}>{'>'}</span>
            </div>
            {props.users.map(u =>
                <UserItem key={u.id} avaLink={u.photos.small ? u.photos.small : props.avaLinkArray[2]}
                          followed={u.followed} userId={u.id} status={u.status} fullName={u.name} follow={props.follow}
                unfollow={props.unfollow} followingInProgress={props.followingInProgress} />)
            }
        </div>
    );
};

export default Users;


