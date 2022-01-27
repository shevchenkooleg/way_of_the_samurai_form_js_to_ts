import React, { MouseEventHandler } from "react";
import style from "./NewPosts.module.css";

type NewPostsPropsType = {
    addPost: Function
}

const NewPosts = () => {

    let newPost = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        let text = newPost.current!.value;
        alert(text)
    }


    return (
        <div className={style.newPosts}>
            <div>Add new post</div>
            <textarea className={style.textArea} ref={newPost}>what's news...</textarea>
            <button className={style.button} onClick={ addPost }>Add</button>
        </div>
    )
}

export default NewPosts;