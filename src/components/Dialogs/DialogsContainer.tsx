import React from 'react';
import {addMessageActionCreator, newMessageTextAreaUpdateActionCreator} from "../../redux/dialogReducer";
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {StateType} from "../../App";


let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Function) => {
    return {
        addNewMessage: () => {dispatch(addMessageActionCreator());},
        changeTextArea: (messageText: string) => {dispatch(newMessageTextAreaUpdateActionCreator(messageText))}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;