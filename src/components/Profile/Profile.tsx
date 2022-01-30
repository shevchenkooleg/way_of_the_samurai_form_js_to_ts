import React from "react";
import style from "./Profile.module.css";
import Posts from "./Posts/Posts";
import Wallpaper from "./Wallpaper/Wallpaper";
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";
import {postsType} from "../../App";

type ProfilePropsType = {
    profilePage: {
        posts: Array<postsType>
        newPostText: string
    },
    dispatch: Function
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.content}>
            <Wallpaper/>
            <Avatar/>
            <Description/>
            <Posts profilePage={props.profilePage} dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;