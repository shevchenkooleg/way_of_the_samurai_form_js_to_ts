import React from "react";
import style from './TextAreaFrame.module.css'




const TextAreaFrame = () => {

    let newMessage = React.createRef<HTMLTextAreaElement>();

    let addMessage = () => {
        let text = newMessage.current!.value;
        alert(text)
        console.log(newMessage);
    }

    return (
        <div className={style.content}>
            <textarea className={style.textArea} ref={newMessage}></textarea>
            <button className={style.btn} onClick={ addMessage }>Send</button>
        </div>

    )
}

export default TextAreaFrame;
