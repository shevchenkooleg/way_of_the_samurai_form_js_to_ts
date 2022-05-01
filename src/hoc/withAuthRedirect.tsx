import {Navigate} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType, AuthDataType} from "../redux/redux-store";

type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    // debugger
    function RedirectComponent(props: mapStateToPropsType) {
        let {isAuth, ...restProps} = props
        // debugger
        if (!isAuth) return <Navigate to={'/login'}></Navigate>


        return <Component {...restProps as T}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
}