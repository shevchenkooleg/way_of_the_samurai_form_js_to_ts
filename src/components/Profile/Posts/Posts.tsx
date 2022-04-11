import React from "react";
import style from "./Posts.module.css";
import NewPosts from "./NewPost/NewPosts";
import Post from "./Post/Post";
import {postsType} from "../../../App";


type ProfilePropsType = {
    posts: Array<postsType>
    newPostText: string
    addNewPost: () => void
    changeTextArea: (text: string) => void
}


const Posts = (props: ProfilePropsType) => {

    let postsElements = props.posts.map(el => <Post key={el.id} message={el.post} likeCount={el.likeCount}/>)

    return (
        <div className={style.posts}>
            <NewPosts addNewPost={props.addNewPost} changeTextArea={props.changeTextArea}
                      newPostText={props.newPostText}/>
            {postsElements}
        </div>
    )
}

export default Posts;