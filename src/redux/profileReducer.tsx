import {AppStateType, profilePageType} from "./redux-store";
import {ProfileType} from "../App";
import {profileAPI, userAPI} from "../api/api";
import {ThunkAction} from "redux-thunk/es/types";

export enum PROFILE_PAGE_ACTION_TYPE {
    ADD_POST = 'ADD-POST',
    NEW_POST_TEXT_AREA_UPDATE = 'NEW-POST-TEXT-AREA-UPDATE',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    SET_PROFILE_STATUS = 'SET_PROFILE_STATUS',
}

let initialState = {
    profile: null,
    posts: [
        {id: 2, userId: 0, post: 'Hi, how are you doing?', likeCount: 15},
        {id: 1, userId: 0, post: 'This is my first post', likeCount: 20}
    ],
    newPostText: '',
    profileStatus: '',
    isFetching: false,
}


export type ProfileReducerActionType = AddPostACType | NewPostTextAreaUpdateACType |
    SetUserProfileACType | ToggleIsFetchingACType | SetProfileStatusACType

const profileReducer = (state: profilePageType = initialState, action: ProfileReducerActionType) => {

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
        case PROFILE_PAGE_ACTION_TYPE.SET_PROFILE_STATUS: {
            return {...state, profileStatus: action.profileStatus}
        }
        default:
            return state
    }
};

type AddPostACType = ReturnType<typeof addPost>
export const addPost = () => {
    return {type: PROFILE_PAGE_ACTION_TYPE.ADD_POST} as const
}

type NewPostTextAreaUpdateACType = ReturnType<typeof newPostTextAreaUpdate>
export const newPostTextAreaUpdate = (text: string) => {
    return {
        type: PROFILE_PAGE_ACTION_TYPE.NEW_POST_TEXT_AREA_UPDATE,
        newText: text
    } as const
}

type SetUserProfileACType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: PROFILE_PAGE_ACTION_TYPE.SET_USER_PROFILE,
        profile
    } as const
}

type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: PROFILE_PAGE_ACTION_TYPE.TOGGLE_IS_FETCHING,
        isFetching
    } as const
}

type SetProfileStatusACType = ReturnType<typeof setProfileStatus>
export const setProfileStatus = (profileStatus: string) => {
    return {
        type:PROFILE_PAGE_ACTION_TYPE.SET_PROFILE_STATUS,
        profileStatus
    } as const
}



//THUNK

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ProfileReducerActionType>
export const getUserProfile = (userId: number): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))

        userAPI.getProfile(userId).then(response => {

            dispatch(setUserProfile(response.data));
            dispatch(toggleIsFetching(false));
        });
    }
}

export const getUserStatus = (userId: number):ThunkType  => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        profileAPI.getStatus(userId).then(response => {
            if (response.data) {
                dispatch(setProfileStatus(response.data))
            } else {
                dispatch(setProfileStatus('Null'))
                dispatch(toggleIsFetching(false))
            }
        })
    }
}

export const updateStatus = (newStatus: string): ThunkType => {
    return async (dispatch) => {
        profileAPI.updateStatus(newStatus).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setProfileStatus(newStatus))
            }
        })
    }
}

export default profileReducer;
