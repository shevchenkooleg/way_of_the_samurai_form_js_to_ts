import React from "react";
import style from "./Posts.module.css";
import Post from "./Post/Post";
import NewPosts from "./NewPost/NewPosts";

const Posts = () => {
    return (
        <div className={style.posts}>
            <NewPosts />
            <Post message={'Hi, how are you doing?'} likeCount={15}/>
            <Post message={'This is my first post'} likeCount={20}/>
        </div>
    )
}

export default Posts;