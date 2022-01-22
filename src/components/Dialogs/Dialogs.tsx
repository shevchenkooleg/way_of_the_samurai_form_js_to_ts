import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from './Dialog/DialogItem';
import MessageItem from "./Message/MessageItem";


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

let messagesElements = messages.map( m => <MessageItem message={m.message}/> )
let dialogsElements= dialogs.map( d => <DialogItem name={d.name} id={d.id} /> )


const Dialogs = () => {

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogsElements }

            </div>
            <div className={style.messagesItems}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;