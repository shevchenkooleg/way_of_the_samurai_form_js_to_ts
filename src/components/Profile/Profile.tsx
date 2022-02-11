import React from "react";
import style from "./Profile.module.css";
import Wallpaper from "./Wallpaper/Wallpaper";
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";
import PostsContainer from "./Posts/PostsContainer";

const Profile = () => {
    return (
        <div className={style.content}>
            <Wallpaper/>
            <Avatar/>
            <Description/>
            <PostsContainer />
        </div>
    )
}

export default Profile;