import React, { MouseEventHandler } from "react";
import style from "./Profile.module.css";
import Posts from "./Posts/Posts";
import Wallpaper from "./Wallpaper/Wallpaper";
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";
import {postsType} from "../../App";
import {addPost} from "../../redux/state";
import footer from "../Footer/Footer";

type ProfilePropsType = {
    profilePage: {
        posts: Array<postsType>
    }
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.content}>
            <Wallpaper />
            <Avatar />
            <Description />
            <Posts items={props.profilePage.posts}/>
        </div>
    )
}

export default Profile;