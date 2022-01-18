import React from "react";
import style from "./Profile.module.css";
import Posts from "./Posts/Posts";
import Wallpaper from "./Wallpaper/Wallpaper";
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";

const Profile = () => {
    return (
        <div className={style.content}>
            <Wallpaper />
            <Avatar />
            <Description />
            <Posts />

        </div>
    )
}

export default Profile;