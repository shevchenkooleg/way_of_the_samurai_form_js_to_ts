import {actionType, profilePageType} from "./redux-store";

const ADD_POST = 'ADD-POST'
const NEW_POST_TEXT_AREA_UPDATE = 'NEW-POST-TEXT-AREA-UPDATE'

let initialState = {
    posts: [
        {id: 2, userId: 0, post: 'Hi, how are you doing?', likeCount: 15},
        {id: 1, userId: 0, post: 'This is my first post', likeCount: 20}
    ],
    newPostText: ''
}


const profileReducer = (state: profilePageType = initialState, action: actionType) => {

    let stateCopy

    switch (action.type) {
        case ADD_POST:
            stateCopy = {...state, posts: [...state.posts], newPostText: ''}
            stateCopy.posts.unshift(
                {
                    id: (stateCopy.posts[0].id + 1),
                    userId: 0,
                    post: state.newPostText,
                    likeCount: 0
                }
            )

            return stateCopy

        case NEW_POST_TEXT_AREA_UPDATE:
            stateCopy = {...state,
                newPostText: action.newText}
            return stateCopy

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
