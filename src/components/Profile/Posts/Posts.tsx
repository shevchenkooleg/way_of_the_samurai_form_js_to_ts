import React from "react";
import style from "./Posts.module.css";
import NewPosts from "./NewPost/NewPosts";
import Post from "./Post/Post";
import {postsType} from "../../../App";


type ProfilePropsType = {
    profilePage: {
        posts: Array<postsType>
        newPostText: string
    },
    dispatch: Function
}


const Posts = (props: ProfilePropsType) => {

    let postsElements = props.profilePage.posts.map(el => <Post message={el.post} likeCount={el.likeCount}/>)

    return (
        <div className={style.posts}>
            <NewPosts dispatch={props.dispatch} newPostText={props.profilePage.newPostText}/>
            {postsElements}
        </div>
    )
}

export default Posts;