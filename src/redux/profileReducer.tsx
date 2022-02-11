import {actionType, profilePageType} from "./redux-store";

const ADD_POST = 'ADD-POST'
const NEW_POST_TEXT_AREA_UPDATE = 'NEW-POST-TEXT-AREA-UPDATE'

let initialState = {
    posts: [
        {id: 1, userId: 0, post: 'Hi, how are you doing?', likeCount: 15},
        {id: 2, userId: 0, post: 'This is my first post', likeCount: 20}
    ],
    newPostText: ''
}


const profileReducer = (state: profilePageType = initialState, action: actionType) => {


    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(
                {
                    id: (stateCopy.posts[stateCopy.posts.length - 1].id + 1),
                    userId: 0,
                    post: stateCopy.newPostText,
                    likeCount: 0
                }
            )
            stateCopy.newPostText = ''
            return stateCopy
        }
        case NEW_POST_TEXT_AREA_UPDATE: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
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
