import React from "react";
import style from "./Posts.module.css";
import NewPosts from "./NewPost/NewPosts";
import Post from "./Post/Post";
import {postsType} from "../../../App";
import NewPostsFormik from "./NewPost/NewPostsFormik";


type ProfilePropsType = {
    posts: Array<postsType>
    addNewPost: () => void
}


const Posts = (props: ProfilePropsType) => {

    let postsElements = props.posts.map(el => <Post key={el.id} message={el.post} likeCount={el.likeCount}/>)

    return (
        <div className={style.posts}>
            <NewPostsFormik addNewPost={props.addNewPost}
            />
            {postsElements}
        </div>
    )
}

export default Posts;