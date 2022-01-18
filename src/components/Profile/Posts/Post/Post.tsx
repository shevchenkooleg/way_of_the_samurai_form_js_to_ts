import React from "react";
import style from "./Post.module.css";

const Post = () => {
    return (
        <div className={style.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2YvRcwZBk2u5H6XeNl7929ZwqHN_DxTQkhw&usqp=CAU"
                alt="avatar"/>
            post 1
            <button>Like</button>
        </div>
    )
}

export default Post;