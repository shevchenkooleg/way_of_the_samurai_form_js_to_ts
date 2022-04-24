import {AuthDataType} from "./redux-store"
import {Dispatch} from "redux";
import {authAPI, profileAPI} from "../api/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

type AuthReducer = setAuthDataACType


const authReducer = (state: AuthDataType = initialState, action: AuthReducer) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }

}
type setAuthDataACType = ReturnType<typeof setAuthData>
export const setAuthData = (id: string, email: string, login: string) => {
    return {type: SET_AUTH_DATA, data: {id, email, login}} as const
}


//THUNK

export const autorize = () => {
    return (dispatch: Dispatch) => {
        authAPI.authMe().then(response => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data
                dispatch(setAuthData(id, email, login));
                profileAPI.getProfile(id).then(response => {
                    // console.log('about me..')
                    // console.log(response.data)
                })
            }
        });
    }
}

export default authReducer