import React from "react";
import style from "./NewPosts.module.css";

const NewPosts = () => {
    return (
        <div className={style.newPosts}>
            <div>Add new post</div>
            <textarea className={style.textArea}>what's news...</textarea>
            <button className={style.button}>Add</button>
        </div>
    )
}

export default NewPosts;