import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import {usersFromServerType} from "../components/Users/Users";

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
    posts: Array<postsType>
    newPostText: string
}
export type dialogsPageType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
    newMessageText: string
}
export type sideBarType = {
    onlineStatus: Array<onlineStatusType>
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
export type usersPageType = {
    users: Array<usersFromServerType>
}
export type stateType = {
    profilePage: {
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

// type RootReducerType = typeof reducers; // (globalstate: AppStateType) => AppStateType
// export type AppStateType = ReturnType<RootReducerType>


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer
})

type store = any

let store = createStore(reducers);

declare var window: any
window.store = store;

export default store