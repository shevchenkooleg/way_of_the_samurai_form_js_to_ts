import React from 'react';
import {addMessageActionCreator, newMessageTextAreaUpdateActionCreator} from "../../redux/dialogReducer";
import { StoreType } from '../../index';
import Dialogs from './Dialogs';

type DialogsContainerPropsType = {
    store: StoreType
}

const DialogsContainer = (props: DialogsContainerPropsType) => {

    let addNewMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let changeTextArea = (messageText: string) => {
        props.store.dispatch(newMessageTextAreaUpdateActionCreator(messageText))
    }

    return (
        <Dialogs addNewMessage={addNewMessage} changeTextArea={changeTextArea}
                 dialogsPage={props.store.getState().dialogsPage}/>
    )
}

export default DialogsContainer;