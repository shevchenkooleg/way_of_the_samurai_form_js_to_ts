import {actionType, profilePageType} from "./store";

const ADD_POST = 'ADD-POST'
const NEW_POST_TEXT_AREA_UPDATE = 'NEW-POST-TEXT-AREA-UPDATE'

const profileReducer = (state: profilePageType, action: actionType) => {


    switch (action.type) {
        case ADD_POST:
            state.posts.unshift(
                {
                    id: (state.posts[state.posts.length - 1].id + 1),
                    userId: 0,
                    post: state.newPostText,
                    likeCount: 0
                }
            )
            state.newPostText = ''
            return state
        case NEW_POST_TEXT_AREA_UPDATE:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
};


export const addPostActionCreator = () => {
    return {type: ADD_POST}
}

export const newPostTextAreaUpdateActionCreator = (text: string) => {
    return {
        type: NEW_POST_TEXT_AREA_UPDATE,
        newText: text
    }
}

export default profileReducer;
