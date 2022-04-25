import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import {ProfileType} from "../App";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'

type postsType = {
    id: number
    userId: number
    post: string
    likeCount: number
}
type dialogsType = {
    id: number
    userId: number
    name: string
    avaLink: string
}
type messagesType = {
    id: number
    userId: number
    message: string
    avatarImage: string
}
type onlineStatusType = {
    userId: number
    name: string
    avaLink: string
    isOnline: boolean
}
export type locationType = {
    country: string
    city: string
}
export type profilePageType = {
    profile: ProfileType | null
    posts: Array<postsType>
    newPostText: string
    isFetching: boolean
}
export type dialogsPageType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
    newMessageText: string
}
export type sideBarType = {
    onlineStatus: Array<onlineStatusType>
}
export type AuthDataType = {
    id: string | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
export type usersType = {
    id: number
    userId: number
    avaLink: string
    followed: boolean
    isOnline: boolean
    fullName: string
    status: string
    location: locationType
}
export type usersFromServerType = {
    followed: boolean
    id: number
    name: string
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
}
export type usersPageType = {
    users: Array<usersFromServerType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
export type stateType = {
    profilePage: {
        profile: ProfileType
        posts: Array<postsType>
        newPostText: string
    },
    dialogsPage: {
        dialogs: Array<dialogsType>
        messages: Array<messagesType>
        newMessageText: string
    },
    sideBar: {
        onlineStatus: Array<onlineStatusType>
    }
}
export type actionType = {
    type: string
    newText: string
    userId: number
    users: Array<usersType>
}


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer

})

type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

declare var window: any
window.store = store;

export default store