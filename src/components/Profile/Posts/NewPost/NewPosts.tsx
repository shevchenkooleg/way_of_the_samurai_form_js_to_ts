import React from "react";
import style from "./NewPosts.module.css";

type NewPostsPropsType = {
    addPost: Function
    textAreaUpdate: Function
    newPostText: string
}

const NewPosts = (props: NewPostsPropsType) => {

    let newPost = React.createRef<HTMLTextAreaElement>();

    let addNewPost = () => {
        let text = newPost.current!.value;
        props.addPost();
    }

    let changeTextArea = () => {
        let text = newPost.current!.value;
        props.textAreaUpdate(text);
    }


    return (
        <div className={style.newPosts}>
            <div>Add new post</div>
            <textarea className={style.textArea} ref={newPost} value={props.newPostText} onChange={changeTextArea}/>
            <button className={style.button} onClick={ addNewPost }>Add</button>
        </div>
    )
}

export default NewPosts;