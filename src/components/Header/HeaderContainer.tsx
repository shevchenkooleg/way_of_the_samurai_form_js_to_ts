import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {autorize, setAuthData} from "../../redux/auth-reducer";
import {StateType} from "../../App";
import { AuthDataType } from "../../redux/redux-store";

type HeaderAPIContainerPropsType = AuthDataType & {
    setAuthData: (id: string, email: string, login: string) => void
    autorize: any
}

class HeaderAPIContainer extends React.Component<HeaderAPIContainerPropsType> {

    componentDidMount = () => {
        this.props.autorize()
        // autorize()
    }


    render = () => {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}
let HeaderContainer = connect(mapStateToProps, {setAuthData, autorize})(HeaderAPIContainer)
export default HeaderContainer;