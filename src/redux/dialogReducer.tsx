import {actionType, avaLinkArray, dialogsPageType} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE'
const NEW_MESSAGE_TEXT_AREA_UPDATE = 'NEW-MESSAGE-TEXT-AREA-UPDATE'


export const dialogReducer = (state: dialogsPageType, action: actionType) => {

    switch (action.type) {
        case ADD_MESSAGE:
            state.messages.push(
                {
                    id: (state.messages[state.messages.length - 1].id + 1),
                    userId: 0,
                    message: state.newMessageText,
                    avatarImage: avaLinkArray[0]
                }
            )
            state.newMessageText = ''
            return state
        case NEW_MESSAGE_TEXT_AREA_UPDATE:
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}


export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
}

export const newMessageTextAreaUpdateActionCreator = (messageText: string) => {
    return {type: NEW_MESSAGE_TEXT_AREA_UPDATE, newText: messageText}
}

export default dialogReducer;