import reportWebVitals from './reportWebVitals';
import './index.css'
import state, {addMessage, addPost, newMessageTextAreaUpdate, newPostTextAreaUpdate, subscribe} from './redux/state'
import ReactDOM from "react-dom";
import React from "react";
import App, {dialogsType, messagesType, onlineStatusType, postsType} from "./App";

type rerenderEntireTreePropsType = {
    profilePage: {
        posts: Array<postsType>
        newPostText: string
    },
    dialogsPage: {
        dialogs: Array<dialogsType>
        messages: Array<messagesType>
        newMessageText: string
    },
    sideBar: {
        onlineStatus: Array<onlineStatusType>
    }
}

let rerenderEntireTree = (state: rerenderEntireTreePropsType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addMessage={addMessage} newPostTextAreaUpdate={newPostTextAreaUpdate}
                 newMessageTextAreaUpdate={newMessageTextAreaUpdate}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
