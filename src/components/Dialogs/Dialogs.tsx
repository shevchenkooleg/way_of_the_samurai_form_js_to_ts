import React from 'react';
import style from './Dialogs.module.css'


const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog}>Valentina</div>
                <div className={style.dialog}>Ilya</div>
                <div className={style.dialog}>Elena</div>
                <div className={style.dialog + ' ' + style.active}>Sergey</div>
                <div className={style.dialog}>Alex</div>
            </div>
            <div className={style.messagesItems}>
                <div className={style.message}>Hi, hou are you doing?</div>
                <div className={style.message}>Whatsup dude! Where are you? Call me back later.</div>
                <div className={style.message}>Hi man! Let's go to the ocean tonight. Let me know about that.</div>
            </div>
        </div>
    )
}

export default Dialogs;