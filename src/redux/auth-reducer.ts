import {AppStateType, AuthDataType} from "./redux-store"
import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk/es/types";

const SET_AUTH_DATA = 'SET_AUTH_DATA'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

type AuthReducerType = setAuthDataACType


const authReducer = (state: AuthDataType = initialState, action: AuthReducerType) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }

}
type setAuthDataACType = ReturnType<typeof setAuthData>
export const setAuthData = (id: string | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {type: SET_AUTH_DATA, payload: {id, email, login, isAuth}} as const
}


//THUNK

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, AuthReducerType>

export const getAuthData = (): ThunkType => {
    return async (dispatch) => {
        authAPI.me().then(response => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data
                dispatch(setAuthData(id, email, login, true));
            }
        });
    }
}

type ErrorStatusType = {
    error: string
}

export const makeLogIn = (email: string, password: string, rememberMe: boolean, setStatus: (error: ErrorStatusType) => void): ThunkType => {
    return async (dispatch) => {
        authAPI.logIn(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    // window.location.reload()
                    dispatch(getAuthData())
                } else {
                    setStatus({error: response.data.messages[0]})

                }
            })
    }
}

export const makeLogOut = (): ThunkType => {
    return async (dispatch) => {
        authAPI.logOut()
            .then(response => {
                if (response.data.resultCode === 0) {
                    // window.location.reload()
                    dispatch(setAuthData(null, null, null, false))

                } else {
                    console.log(response.data.messages)
                }
            })
    }
}


export default authReducer