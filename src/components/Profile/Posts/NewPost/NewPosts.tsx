import React from "react";
import style from "./NewPosts.module.css";

const NewPosts = () => {
    return (
        <div className={style.newPosts}>
            <div>My posts</div>
            <textarea>what's news...</textarea>
            <button>Send</button>
        </div>
    )
}

export default NewPosts;