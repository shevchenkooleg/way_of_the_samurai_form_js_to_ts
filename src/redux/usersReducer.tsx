import {Dispatch} from "redux";
import {usersFromServerType, usersPageType} from "./redux-store";
import {userAPI} from "../api/api";

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

export type usersReducerActionType = followACType | unfollowACType | setUsersACType | changeCurrentPageACType |
    setTotalUsersCountACType | toggleIsFetchingACType | toggleFollowACType

const usersReducer = (state: usersPageType = initialState, action: usersReducerActionType) => {


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

type followACType = ReturnType<typeof followAC>
export const followAC = (userId: number) => {
    return {type: USERS_PAGE_ACTION_TYPE.FOLLOW, userId: userId} as const
}

type unfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: number) => {
    return {type: USERS_PAGE_ACTION_TYPE.UNFOLLOW, userId: userId} as const
}

type setUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<usersFromServerType>) => {
    return {type: USERS_PAGE_ACTION_TYPE.SET_USERS, users} as const
}

type changeCurrentPageACType = ReturnType<typeof changeCurrentPage>
export const changeCurrentPage = (currentPage: number) => {
    return {type: USERS_PAGE_ACTION_TYPE.SET_CURRENT_PAGE, currentPage} as const
}

type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {type: USERS_PAGE_ACTION_TYPE.SET_TOTAL_USERS_COUNT, totalUsersCount} as const
}

type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: USERS_PAGE_ACTION_TYPE.TOGGLE_IS_FETCHING, isFetching} as const
}

type toggleFollowACType = ReturnType<typeof toggleFollowing>
export const toggleFollowing = (followingInProgress: boolean, id: number) => {
    return {
        type: USERS_PAGE_ACTION_TYPE.TOGGLE_FOLLOWING_IN_PROGRESS, isFetching: followingInProgress, id
    } as const
}


//THUNK

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(changeCurrentPage(currentPage));
        dispatch(toggleIsFetching(true));
        userAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
            dispatch(toggleIsFetching(false));
        });
    }
}

//THUNK

export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowing(true, userId));
        userAPI.follow(userId).then(response => {
            console.log(response)
            if (response.resultCode === 0) {
                dispatch(followAC(userId))
            }
            dispatch(toggleFollowing(false, userId))
        })
    }
}

export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowing(true, userId))
        userAPI.unfollow(userId).then(response => {
            console.log(response)
            if (response.resultCode === 0) {
                dispatch(unfollowAC(userId))
            }
            dispatch(toggleFollowing(false, userId))
        })
    }
}






export default usersReducer;
