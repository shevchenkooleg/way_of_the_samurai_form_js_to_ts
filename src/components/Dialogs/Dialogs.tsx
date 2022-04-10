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
    addNewMessage: () => void
    changeTextArea: (messageText: string) => void

}
class Dialogs extends React.Component<DialogsPropsType> {

    dialogsElements = this.props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} avaLink={d.avaLink}/>)
    messagesElements = this.props.dialogsPage.messages.map(m => <MessageItem key={m.id} message={m.message} id={m.id}
                                                                            userId={m.userId}
                                                                            avatarImage={m.avatarImage}/>)

    render = () => {
        return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {this.dialogsElements}

            </div>
            <div className={style.messagesItems}>
                {this.messagesElements}
            </div>
            <div className={style.textAreaContainer}>
                <TextAreaFrame newMessageText={this.props.dialogsPage.newMessageText}
                               addNewMessage={this.props.addNewMessage} changeTextArea={this.props.changeTextArea}/>
            </div>
        </div>
    )
    }
}
export default Dialogs;