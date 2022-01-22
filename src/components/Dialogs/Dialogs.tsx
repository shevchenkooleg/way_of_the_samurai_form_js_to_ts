import React from 'react';
import style from './Dialogs.module.css'

type DialogsPropsType = {
    messages: object
    dialogs: object
}

const Dialogs = (props: DialogsPropsType) => {

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { props.dialogs }

            </div>
            <div className={style.messagesItems}>
                { props.messages }
            </div>
        </div>
    )
}

export default Dialogs;