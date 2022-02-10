import React from "react";
import style from './TextAreaFrame.module.css'

type TextAreaFramePropsType = {
    newMessageText: string
    addNewMessage: () => void
    changeTextArea: (messageText: string) => void
}




const TextAreaFrame = (props: TextAreaFramePropsType) => {

    let newMessage = React.createRef<HTMLTextAreaElement>();

    let addNewMessage = () => {
        props.addNewMessage();
    }

    let changeTextArea = () => {
        let messageText = newMessage.current!.value;
        props.changeTextArea(messageText)
    }

    return (
        <div className={style.content}>
            <textarea className={style.textArea} ref={newMessage} value={props.newMessageText} onChange={changeTextArea}/>
            <button className={style.btn} onClick={ addNewMessage }>Send</button>
        </div>

    )
}

export default TextAreaFrame;
