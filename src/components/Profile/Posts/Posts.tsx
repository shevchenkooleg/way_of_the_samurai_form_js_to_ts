import React from "react";
import style from "./Posts.module.css";
import Post from "./Post/Post";
import NewPosts from "./NewPost/NewPosts";

const Posts = () => {
    return (
        <div className={style.posts}>
            <NewPosts />
            <Post />
            <Post />
        </div>
    )
}

export default Posts;