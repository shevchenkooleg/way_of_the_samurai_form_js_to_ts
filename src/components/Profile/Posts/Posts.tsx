import React from "react";
import style from "./Posts.module.css";
import Post from "./Post/Post";
import NewPosts from "./NewPost/NewPosts";

let posts = [
    {id: 1, post: 'Hi, how are you doing?', likeCount: 15},
    {id: 1, post: 'This is my first post', likeCount: 20}
]

let postsElements = posts.map( el => <Post message={el.post} likeCount={el.likeCount}/> )

const Posts = () => {
    return (
        <div className={style.posts}>
            <NewPosts />
            { postsElements }
        </div>
    )
}

export default Posts;