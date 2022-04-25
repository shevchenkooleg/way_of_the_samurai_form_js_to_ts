import React from "react";
import style from "./Profile.module.css";
import Wallpaper from "./Wallpaper/Wallpaper";
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";
import Posts from "./Posts/Posts";
import {postsType, ProfileType} from "../../App";
import Preloader from "../common/Preloader/Preloader";
import { Navigate } from "react-router-dom";

type ProfilePropsType = {
    profile: ProfileType
    posts: Array<postsType>
    newPostText: string
    isAuth: boolean
    addPost: () => void
    newPostTextAreaUpdate: (text: string) => void
}

const Profile = (props: ProfilePropsType) => {

    if (!props.isAuth) {return <Navigate to={'/login'}/>};

    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div className={style.content}>
                <Wallpaper/>
                <Avatar avatar={props.profile.photos}/>
                <Description profile={props.profile}/>
                <Posts posts={props.posts} newPostText={props.newPostText} addNewPost={props.addPost}
                       changeTextArea={props.newPostTextAreaUpdate}/>
            </div>
        )
    }

}

export default Profile;