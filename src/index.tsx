import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


export let messages = [
    {id: 1, message: 'Hi, hou are you doing?'},
    {id: 1, message: 'Whatsup dude! Where are you? Call me back later.'},
    {id: 1, message: 'Hi man! Let\'s go to the ocean tonight. Let me know about that.'},
    {id: 1, message: 'Yo!'},
    {id: 1, message: 'Yo!!'},
    {id: 1, message: 'Yo!!!'}
]

export let dialogs = [
    {id: 1, name: 'Valentina'},
    {id: 2, name: 'Ilya'},
    {id: 3, name: 'Elena'},
    {id: 4, name: 'Sergey'},
    {id: 5, name: 'Vitaliy'},
    {id: 6, name: 'Alexandr'}
]

export let posts = [
    {id: 1, post: 'Hi, how are you doing?', likeCount: 15},
    {id: 1, post: 'This is my first post', likeCount: 20}
]

ReactDOM.render(
  <React.StrictMode>
    <App messages={messages} dialogs={dialogs} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
