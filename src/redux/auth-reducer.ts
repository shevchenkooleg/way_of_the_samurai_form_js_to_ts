const SET_AUTH_DATA = 'SET_AUTH_DATA'


export type AuthDataType = {
    id: string | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
type authReducer = setAuthDataACType
const authReducer = (state: AuthDataType = initialState, action: authReducer) => {
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
export const setAuthData = (id:string, email:string, login:string) => {
    return {type: SET_AUTH_DATA, data: {id, email, login}} as const
}

export default authReducer