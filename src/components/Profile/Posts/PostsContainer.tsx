import React from "react";
import Posts from "./Posts";
import {addPostActionCreator, newPostTextAreaUpdateActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {StateType} from "../../../App";



let mapStateToProps = (state: StateType) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch: Function) => {
    return {
        addNewPost: () => {dispatch(addPostActionCreator());},
        changeTextArea: (text: string) => {dispatch(newPostTextAreaUpdateActionCreator(text));}
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;