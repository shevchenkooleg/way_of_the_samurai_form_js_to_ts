import {AppStateType, usersFromServerType, usersPageType} from "./redux-store";
import {userAPI} from "../api/api";
import { ThunkAction } from "redux-thunk/es/types";

export enum USERS_PAGE_ACTION_TYPE {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS',
}

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

export type UsersReducerActionType = FollowACType | UnfollowACType | SetUsersACType | ChangeCurrentPageACType |
    SetTotalUsersCountACType | ToggleIsFetchingACType | ToggleFollowACType

const usersReducer = (state: usersPageType = initialState, action: UsersReducerActionType) => {


    switch (action.type) {
        case USERS_PAGE_ACTION_TYPE.FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case USERS_PAGE_ACTION_TYPE.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case USERS_PAGE_ACTION_TYPE.SET_USERS:
            return {...state, users: action.users}
        case USERS_PAGE_ACTION_TYPE.SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case USERS_PAGE_ACTION_TYPE.SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case USERS_PAGE_ACTION_TYPE.TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case USERS_PAGE_ACTION_TYPE.TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id != action.id)
            }
        default:
            return state
    }
};


//ACTION_CREATORS

type FollowACType = ReturnType<typeof followSuccess>
export const followSuccess = (userId: number) => {
    return {type: USERS_PAGE_ACTION_TYPE.FOLLOW, userId: userId} as const
}

type UnfollowACType = ReturnType<typeof unfollowSuccess>
export const unfollowSuccess = (userId: number) => {
    return {type: USERS_PAGE_ACTION_TYPE.UNFOLLOW, userId: userId} as const
}

type SetUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<usersFromServerType>) => {
    return {type: USERS_PAGE_ACTION_TYPE.SET_USERS, users} as const
}

type ChangeCurrentPageACType = ReturnType<typeof changeCurrentPage>
export const changeCurrentPage = (currentPage: number) => {
    return {type: USERS_PAGE_ACTION_TYPE.SET_CURRENT_PAGE, currentPage} as const
}

type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {type: USERS_PAGE_ACTION_TYPE.SET_TOTAL_USERS_COUNT, totalUsersCount} as const
}

type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: USERS_PAGE_ACTION_TYPE.TOGGLE_IS_FETCHING, isFetching} as const
}

type ToggleFollowACType = ReturnType<typeof toggleFollowing>
export const toggleFollowing = (followingInProgress: boolean, id: number) => {
    return {
        type: USERS_PAGE_ACTION_TYPE.TOGGLE_FOLLOWING_IN_PROGRESS, isFetching: followingInProgress, id
    } as const
}


//THUNK

// type GetStateType = () => AppStateType
// type DispatchType = Dispatch<UsersReducerActionType>

// export const getUsers = (currentPage: number, pageSize: number) => {
//     return async (dispatch: DispatchType, getState: GetStateType) => {
//         dispatch(changeCurrentPage(currentPage));
//         dispatch(toggleIsFetching(true));
//         userAPI.getUsers(currentPage, pageSize).then(response => {
//             dispatch(setUsers(response.items));
//             dispatch(setTotalUsersCount(response.totalCount));
//             dispatch(toggleIsFetching(false));
//         });
//     }
// }

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, UsersReducerActionType>

export const getUsers = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch) => {    // 2-nd param - getState
        dispatch(changeCurrentPage(currentPage));
        dispatch(toggleIsFetching(true));
        userAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
            dispatch(toggleIsFetching(false));
        });
    }
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleFollowing(true, userId));
        userAPI.follow(userId).then(response => {
            console.log(response)
            if (response.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowing(false, userId))
        })
    }
}

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleFollowing(true, userId))
        userAPI.unfollow(userId).then(response => {
            console.log(response)
            if (response.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowing(false, userId))
        })
    }
}


export default usersReducer;
