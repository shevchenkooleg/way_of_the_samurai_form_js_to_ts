import React from "react";
import style from "./Profile.module.css";
import Wallpaper from "./Wallpaper/Wallpaper";
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";
import {StoreType} from "../../index";
import PostsContainer from "./Posts/PostsContainer";

type ProfilePropsType = {
    store: StoreType
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.content}>
            <Wallpaper/>
            <Avatar/>
            <Description/>
            <PostsContainer store={props.store} />
        </div>
    )
}

export default Profile;