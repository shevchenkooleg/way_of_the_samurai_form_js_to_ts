import React from 'react';
import style from './Dialogs.module.css'
import MessageItem from "./Message/MessageItem";
import DialogItem from "./Dialog/DialogItem";
import {dialogsType, messagesType} from "../../App";
import TextAreaFrame from "./TextAreaFrame/TextAreaFrame";
import { Navigate } from 'react-router-dom';



type DialogsPropsType = {
    dialogsPage: {
        messages: Array<messagesType>
        dialogs: Array<dialogsType>
        newMessageText: string
    }
    isAuth: boolean
    addMessage: () => void
    newMessageTextAreaUpdate: (messageText: string) => void

}
class Dialogs extends React.Component<DialogsPropsType> {

    render = () => {

        if (!this.props.isAuth) return <Navigate to={'/login'}></Navigate>

        const dialogsElements = this.props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} avaLink={d.avaLink}/>)
        const messagesElements = this.props.dialogsPage.messages.map(m => {
            return <MessageItem key={m.id} message={m.message} id={m.id} userId={m.userId} avatarImage={m.avatarImage}/>})

        return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={style.messagesItems}>
                {messagesElements}
            </div>
            <div className={style.textAreaContainer}>
                <TextAreaFrame newMessageText={this.props.dialogsPage.newMessageText}
                               addNewMessage={this.props.addMessage} changeTextArea={this.props.newMessageTextAreaUpdate}/>
            </div>
        </div>
    )
    }
}
export default Dialogs;