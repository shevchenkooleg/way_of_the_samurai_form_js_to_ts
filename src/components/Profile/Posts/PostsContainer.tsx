import React from "react";
import style from "./Posts.module.css";
import {StoreType} from "../../../index";
import Posts from "./Posts";
import {addPostActionCreator, newPostTextAreaUpdateActionCreator} from "../../../redux/profileReducer";


type ProfileContainerPropsType = {
    store: StoreType
}


const PostsContainer = (props: ProfileContainerPropsType) => {

    let addNewPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let changeTextArea = (text: string) => {
        props.store.dispatch(newPostTextAreaUpdateActionCreator(text));
    }

    return (
        <div className={style.posts}>
            <Posts addNewPost={addNewPost} changeTextArea={changeTextArea}
                   profilePage={props.store.getState().profilePage}/>
        </div>
)
}

export default PostsContainer;