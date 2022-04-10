import React from 'react';
import {addMessage, newMessageTextAreaUpdate} from "../../redux/dialogReducer";
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {StateType} from "../../App";


let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const DialogsContainer = connect(mapStateToProps, {addMessage, newMessageTextAreaUpdate})(Dialogs);

export default DialogsContainer;