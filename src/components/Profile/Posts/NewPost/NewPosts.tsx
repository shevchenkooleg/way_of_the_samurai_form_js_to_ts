import React from "react";
import style from "./NewPosts.module.css";

type NewPostsPropsType = {
    dispatch: Function
    newPostText: string
}

const NewPosts = (props: NewPostsPropsType) => {

    let newPost = React.createRef<HTMLTextAreaElement>();

    let addNewPost = () => {
        props.dispatch( {type: 'ADD-POST'} );
    }

    let changeTextArea = () => {
        let text = newPost.current!.value;
        props.dispatch( {type: 'NEW-POST-TEXT-AREA-UPDATE', newText: text} );
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