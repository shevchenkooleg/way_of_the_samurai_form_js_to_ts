import React, { MouseEventHandler } from "react";
import style from "./Posts.module.css";
import NewPosts from "./NewPost/NewPosts";
import Post from "./Post/Post";
import {postsType} from "../../../App";



type PostsPropsType = {
    items: Array<postsType>
}



const Posts = (props: PostsPropsType) => {

    let postsElements = props.items.map( el => <Post message={el.post} likeCount={el.likeCount}/> )

    return (
        <div className={style.posts}>
            <NewPosts />
            { postsElements }
        </div>
    )
}

export default Posts;