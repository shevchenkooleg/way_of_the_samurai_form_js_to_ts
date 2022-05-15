import React from "react";
import { connect } from "react-redux";
import {compose} from "redux";
import {makeLogIn} from "../../redux/auth-reducer";
import { Login } from "./Login";
import {StateType} from "../../App";

type LoginContainerPropsType = {
    isAuth: boolean
    makeLogIn: (email: string, password: string, rememberMe: boolean, setStatus: (error: string) => void) => void
}

class LoginContainer extends React.Component<LoginContainerPropsType> {


    render = () => {
        return (
        <div>
            <Login {...this.props}/>
        </div>
        )
    }
}

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth
})



export default compose<React.ComponentType>(
    connect(mapStateToProps, {makeLogIn})
)(LoginContainer)