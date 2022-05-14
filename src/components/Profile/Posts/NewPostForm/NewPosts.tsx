import React from "react";
import style from "./NewPosts.module.css";

type NewPostsPropsType = {
    addNewPost: () => void
    changeTextArea: (text: string) => void
    newPostText: string
}


const NewPosts = (props: NewPostsPropsType) => {

    let newPost = React.createRef<HTMLTextAreaElement>();

    let addNewPost = () => {
        props.addNewPost();
    }

    let changeTextArea = () => {
        let text = newPost.current!.value;
        props.changeTextArea(text);
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