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
    },
    addPost: Function
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.content}>
            <Wallpaper />
            <Avatar />
            <Description />
            <Posts items={props.profilePage.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;