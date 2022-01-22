import React from "react";
import style from "./NewPosts.module.css";

const NewPosts = () => {
    return (
        <div className={style.newPosts}>
            <div>New post</div>
            <textarea className={style.textArea}>what's news...</textarea>
            <button className={style.button}>Send</button>
        </div>
    )
}

export default NewPosts;