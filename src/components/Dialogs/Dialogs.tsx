import React from 'react';
import style from './Dialogs.module.css'
import MessageItem from "./Message/MessageItem";
import DialogItem from "./Dialog/DialogItem";
import {dialogsType, messagesType} from "../../App";
import TextAreaFrame from "./TextAreaFrame/TextAreaFrame";

type DialogsPropsType = {
    dialogsPage: {
        messages: Array<messagesType>
        dialogs: Array<dialogsType>
        newMessageText: string
    },
    addMessage: Function
    newMessageTextAreaUpdate: Function
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} avaLink={d.avaLink}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <MessageItem message={m.message} id={m.id}
                                                                            userId={m.userId}
                                                                            avatarImage={m.avatarImage}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={style.messagesItems}>
                {messagesElements}
            </div>
            <div className={style.textAreaContainer}>
                <TextAreaFrame newMessageText={props.dialogsPage.newMessageText}
                               newMessageTextAreaUpdate={props.newMessageTextAreaUpdate} addMessage={props.addMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;