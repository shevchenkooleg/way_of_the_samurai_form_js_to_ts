import React from "react";
import style from "./Posts.module.css";
import NewPosts from "./NewPost/NewPosts";



type PostsPropsType = {
    items: object
}

const Posts = (props: PostsPropsType) => {
    return (
        <div className={style.posts}>
            <NewPosts />
            { props.items }
        </div>
    )
}

export default Posts;