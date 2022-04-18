import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthDataType, setAuthData} from "../../redux/auth-reducer";
import {StateType} from "../../App";

type HeaderAPIContainerPropsType = AuthDataType & {
    setAuthData: (id: string, email: string, login: string) => void
}

class HeaderContainer extends React.Component<HeaderAPIContainerPropsType> {

    componentDidMount = () => {
        console.log(this.props)
        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                this.props.setAuthData(id, email, login)
            }
        });
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
export default connect(mapStateToProps, {setAuthData})(HeaderContainer);