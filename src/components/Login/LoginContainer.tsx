import React from "react";
import { connect } from "react-redux";
import {StateType} from "../../App";
import {compose} from "redux";
import Login from "./Login";
import {makeLogIn} from "../../redux/auth-reducer";
import LoginFormik from "./LoginFormik";

type LoginContainerPropsType = {
    makeLogIn: (email: string, password: string, rememberMe: boolean) => void
}

class LoginContainer extends React.Component<LoginContainerPropsType> {


    render = () => {

        return (
        <div>
            <LoginFormik {...this.props}/>
        </div>
        )
    }
}

let mapStateToProps = (state: StateType) => ({
    // login: state.profilePage.profile,
    // password: state.profilePage.posts,
    // rememberMe: state.profilePage.newPostText,
});



export default compose<React.ComponentType>(
    connect(mapStateToProps, {makeLogIn})
)(LoginContainer)