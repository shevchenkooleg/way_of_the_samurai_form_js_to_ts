import {profilePageType} from "./redux-store";
import {ProfileType} from "../App";

export enum PROFILE_PAGE_ACTION_TYPE {
    ADD_POST = 'ADD-POST',
    NEW_POST_TEXT_AREA_UPDATE = 'NEW-POST-TEXT-AREA-UPDATE',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
}

let initialState = {
    // profile: {
    //     aboutMe: 'я круто чувак 1001%',
    //     contacts: {
    //         facebook: "facebook.com",
    //         website: null,
    //         vk: "vk.com/dimych",
    //         twitter: "https://twitter.com/@sdf",
    //         instagram: "instagra.com/sds",
    //         youtube: null,
    //         github: "github.com",
    //         mainLink: null
    //     },
    //     lookingForAJob: true,
    //     lookingForAJobDescription: 'не ищу, а дурачусь',
    //     fullName: 'samurai dimych',
    //     userId: 2,
    //     photos: {
    //         small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
    //         large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0",
    //     },
    // },
    profile: null,
    posts: [
        {id: 2, userId: 0, post: 'Hi, how are you doing?', likeCount: 15},
        {id: 1, userId: 0, post: 'This is my first post', likeCount: 20}
    ],
    newPostText: '',
    isFetching: false,
}


export type profileReducerActionType = addPostACType | newPostTextAreaUpdateACType | setUserProfileACType | toggleIsFetchingACType

const profileReducer = (state: profilePageType = initialState, action: profileReducerActionType) => {

    let stateCopy

    switch (action.type) {
        case PROFILE_PAGE_ACTION_TYPE.ADD_POST: {
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
        }
        case PROFILE_PAGE_ACTION_TYPE.NEW_POST_TEXT_AREA_UPDATE: {
            stateCopy = {
                ...state,
                newPostText: action.newText
            }
            return stateCopy
        }
        case PROFILE_PAGE_ACTION_TYPE.SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case PROFILE_PAGE_ACTION_TYPE.TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
};

type addPostACType = ReturnType<typeof addPost>
export const addPost = () => {
    return {type: PROFILE_PAGE_ACTION_TYPE.ADD_POST} as const
}

type newPostTextAreaUpdateACType = ReturnType<typeof newPostTextAreaUpdate>
export const newPostTextAreaUpdate = (text: string) => {
    return {
        type: PROFILE_PAGE_ACTION_TYPE.NEW_POST_TEXT_AREA_UPDATE,
        newText: text
    } as const
}

type setUserProfileACType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: PROFILE_PAGE_ACTION_TYPE.SET_USER_PROFILE,
        profile
    } as const
}

type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: PROFILE_PAGE_ACTION_TYPE.TOGGLE_IS_FETCHING,
        isFetching
    } as const
}

export default profileReducer;
