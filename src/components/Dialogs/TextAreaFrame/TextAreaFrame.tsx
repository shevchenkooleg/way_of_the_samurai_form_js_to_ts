import React from "react";
import style from './TextAreaFrame.module.css'

type TextAreaFrameType = {
    newMessageText: string
    dispatch: Function
}


const TextAreaFrame = (props: TextAreaFrameType) => {

    let newMessage = React.createRef<HTMLTextAreaElement>();

    let addNewMessage = () => {
        props.dispatch( {type: 'ADD-MESSAGE'} );
    }

    let changeTextArea = () => {
        let messageText = newMessage.current!.value;
        props.dispatch( {type: 'NEW-MESSAGE-TEXT-AREA-UPDATE', newText: messageText} )
    }

    return (
        <div className={style.content}>
            <textarea className={style.textArea} ref={newMessage} value={props.newMessageText} onChange={changeTextArea}/>
            <button className={style.btn} onClick={ addNewMessage }>Send</button>
        </div>

    )
}

export default TextAreaFrame;
