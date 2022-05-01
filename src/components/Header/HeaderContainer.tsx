import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthData, setAuthData} from "../../redux/auth-reducer";
import {StateType} from "../../App";
import { AuthDataType } from "../../redux/redux-store";
import {log} from "util";

type HeaderAPIContainerPropsType = AuthDataType & {
    setAuthData: (id: string, email: string, login: string) => void
    getAuthData: () => void
}

class HeaderAPIContainer extends React.Component<HeaderAPIContainerPropsType> {

    componentDidMount = () => {
        this.props.getAuthData()
    }


    render = () => {
        {console.log('Header')}
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
let HeaderContainer = connect(mapStateToProps, {setAuthData, getAuthData})(HeaderAPIContainer)
export default HeaderContainer;