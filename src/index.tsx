import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MessageItem from "./components/Dialogs/Message/MessageItem";
import DialogItem from "./components/Dialogs/Dialog/DialogItem";
import Post from "./components/Profile/Posts/Post/Post";


let messages = [
    {id: 1, message: 'Hi, hou are you doing?'},
    {id: 1, message: 'Whatsup dude! Where are you? Call me back later.'},
    {id: 1, message: 'Hi man! Let\'s go to the ocean tonight. Let me know about that.'},
    {id: 1, message: 'Yo!'},
    {id: 1, message: 'Yo!!'},
    {id: 1, message: 'Yo!!!'}
]

let dialogs = [
    {id: 1, name: 'Valentina'},
    {id: 2, name: 'Ilya'},
    {id: 3, name: 'Elena'},
    {id: 4, name: 'Sergey'},
    {id: 5, name: 'Vitaliy'},
    {id: 6, name: 'Alexandr'}
]

let posts = [
    {id: 1, post: 'Hi, how are you doing?', likeCount: 15},
    {id: 1, post: 'This is my first post', likeCount: 20}
]

export let messagesElements = messages.map( m => <MessageItem message={m.message}/> )
export let dialogsElements= dialogs.map( d => <DialogItem name={d.name} id={d.id} /> )
export let postsElements = posts.map( el => <Post message={el.post} likeCount={el.likeCount}/> )


ReactDOM.render(
  <React.StrictMode>
    <App messages={messagesElements} dialogs={dialogsElements} posts={postsElements}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
