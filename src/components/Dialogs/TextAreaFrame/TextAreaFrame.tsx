import React from "react";
import { addMessageActionCreator, newMessageTextAreaUpdateActionCreator } from "../../../redux/state";
import style from './TextAreaFrame.module.css'

type TextAreaFrameType = {
    newMessageText: string
    dispatch: Function
}




const TextAreaFrame = (props: TextAreaFrameType) => {

    let newMessage = React.createRef<HTMLTextAreaElement>();

    let addNewMessage = () => {
        props.dispatch( addMessageActionCreator() );
    }

    let changeTextArea = () => {
        let messageText = newMessage.current!.value;
        props.dispatch( newMessageTextAreaUpdateActionCreator(messageText) )
    }

    return (
        <div className={style.content}>
            <textarea className={style.textArea} ref={newMessage} value={props.newMessageText} onChange={changeTextArea}/>
            <button className={style.btn} onClick={ addNewMessage }>Send</button>
        </div>

    )
}

export default TextAreaFrame;
