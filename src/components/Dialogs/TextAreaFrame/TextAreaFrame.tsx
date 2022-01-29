import React from "react";
import style from './TextAreaFrame.module.css'

type TextAreaFrameType = {
    newMessageText: string
    newMessageTextAreaUpdate: Function
    addMessage: Function
}


const TextAreaFrame = (props: TextAreaFrameType) => {

    let newMessage = React.createRef<HTMLTextAreaElement>();

    let addNewMessage = () => {
        props.addMessage();
    }

    let changeTextArea = () => {
        let messageText = newMessage.current!.value;
        props.newMessageTextAreaUpdate(messageText)
    }

    return (
        <div className={style.content}>
            <textarea className={style.textArea} ref={newMessage} value={props.newMessageText} onChange={changeTextArea}/>
            <button className={style.btn} onClick={ addNewMessage }>Send</button>
        </div>

    )
}

export default TextAreaFrame;
