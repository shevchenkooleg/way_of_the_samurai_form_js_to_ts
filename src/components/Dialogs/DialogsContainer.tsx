import React from 'react';
import {addMessage, newMessageTextAreaUpdate} from "../../redux/dialogReducer";
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {StateType} from "../../App";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from 'redux';


let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {addMessage, newMessageTextAreaUpdate}),
    withAuthRedirect
)(Dialogs)

// const DialogsContainer = connect(mapStateToProps, {addMessage, newMessageTextAreaUpdate})(Dialogs);
// const DialogsContainer = withAuthRedirect(connect(mapStateToProps, {addMessage, newMessageTextAreaUpdate})(Dialogs));

export default DialogsContainer;