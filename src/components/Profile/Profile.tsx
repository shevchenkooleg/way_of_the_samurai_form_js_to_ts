import React from "react";
import style from "./Profile.module.css";
import Posts from "./Posts/Posts";
import Wallpaper from "./Wallpaper/Wallpaper";
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";
import Post from "./Posts/Post/Post";

type ProfilePropsType = {
    posts: object
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.content}>
            <Wallpaper />
            <Avatar />
            <Description />
            <Posts items={props.posts} />
        </div>
    )
}

export default Profile;