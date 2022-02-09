import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

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
}


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sideBar: sidebarReducer,
})

let store = createStore(reducers);

export default store