import React from "react";
import style from "./NewPosts.module.css";

type NewPostsPropsType = {
    addPost: Function
}

const NewPosts = (props: NewPostsPropsType) => {

    let newPost = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        let text = newPost.current!.value;
        props.addPost(text);
    }


    return (
        <div className={style.newPosts}>
            <div>Add new post</div>
            <textarea className={style.textArea} ref={newPost} placeholder={'what\'s news...'}/>
            <button className={style.button} onClick={ addPost }>Add</button>
        </div>
    )
}

export default NewPosts;