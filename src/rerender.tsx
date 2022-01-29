import React from 'react';
import ReactDOM from 'react-dom';
import App, {dialogsType, messagesType, onlineStatusType, postsType} from './App';

export type rerenderEntireTreePropsType = {
        profilePage: {
            posts: Array<postsType>
            newPostText: string
        },
        dialogsPage: {
            dialogs: Array<dialogsType>
            messages: Array<messagesType>
        },
        sideBar: {
            onlineStatus: Array<onlineStatusType>
        }
}


export let rerenderEntireTree = (state: rerenderEntireTreePropsType, addPost: Function, textAreaUpdate: Function) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} textAreaUpdate={textAreaUpdate}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
