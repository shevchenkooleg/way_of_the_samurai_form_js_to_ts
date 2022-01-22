import React from "react";
import style from "./Post.module.css";

type PostPropsType = {
    message: string
    likeCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={style.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2YvRcwZBk2u5H6XeNl7929ZwqHN_DxTQkhw&usqp=CAU"
                alt="avatar"/>
            <span className={style.postContent}>{props.message}</span>
            <button className={style.button}>Like +{props.likeCount}</button>
        </div>
    )
}

export default Post;


