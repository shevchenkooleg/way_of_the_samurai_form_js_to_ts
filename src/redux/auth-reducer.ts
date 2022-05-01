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

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, AuthReducerType>

export const getAuthData = ():ThunkType => {
    return async (dispatch) => {
        authAPI.me().then(response => {
            if (response.resultCode === 0) {
                console.log('getAuthData')
                let {id, login, email} = response.data
                dispatch(setAuthData(id, email, login));
                // profileAPI.getProfile(id).then(response => {
                //     console.log('about me..')
                //     console.log(response.data)
                // })
            }
        });
    }
}

export default authReducer