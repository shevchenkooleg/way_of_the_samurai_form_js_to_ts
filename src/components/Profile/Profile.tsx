import React from "react";
import style from "./Profile.module.css";
import Wallpaper from "./Wallpaper/Wallpaper";
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";
import Posts from "./Posts/Posts";
import {postsType, ProfileType} from "../../App";
import Preloader from "../common/Preloader/Preloader";
import { ProfileStatus } from "./ProfileStatus/ProfileStatus";
import { ProfileStatusFunc } from "./ProfileStatus/ProfileStatusFunc";

type ProfilePropsType = {
    profile: ProfileType
    posts: Array<postsType>
    newPostText: string
    profileStatus: string
    addPost: () => void
    newPostTextAreaUpdate: (text: string) => void
    updateStatus: (newStatus: string) => void

}

const Profile = (props: ProfilePropsType) => {


    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div className={style.content}>
                {/*<Wallpaper/>*/}
                <ProfileStatus status={props.profileStatus} updateStatus={props.updateStatus}/>
                <Avatar avatar={props.profile.photos}/>
                <Description profile={props.profile}/>
                <Posts posts={props.posts} newPostText={props.newPostText} addNewPost={props.addPost}
                       changeTextArea={props.newPostTextAreaUpdate}/>
            </div>
        )
    }

}

export default Profile;