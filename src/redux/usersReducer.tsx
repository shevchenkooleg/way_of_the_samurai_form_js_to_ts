import {usersFromServerType, usersPageType} from "./redux-store";

export enum USERS_PAGE_ACTION_TYPE {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
}

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}

export type usersReducerActionType = followACType | unfollowACType | setUsersACType | changeCurrentPageACType |
    setTotalUsersCountACType | toggleIsFetchingACType

const usersReducer = (state: usersPageType = initialState, action: usersReducerActionType) => {


    switch (action.type) {
        case USERS_PAGE_ACTION_TYPE.FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case USERS_PAGE_ACTION_TYPE.UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                } )
            }
        case USERS_PAGE_ACTION_TYPE.SET_USERS:
            return {...state, users: action.users}
        case USERS_PAGE_ACTION_TYPE.SET_CURRENT_PAGE:
            return {...state, currentPage:action.currentPage}
        case USERS_PAGE_ACTION_TYPE.SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount:action.totalUsersCount}
        case USERS_PAGE_ACTION_TYPE.TOGGLE_IS_FETCHING:
            return {...state, isFetching:action.isFetching}
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

type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<usersFromServerType>) => {
    return {type: USERS_PAGE_ACTION_TYPE.SET_USERS, users} as const
}

type changeCurrentPageACType = ReturnType<typeof changeCurrentPageAC>
export const changeCurrentPageAC = (currentPage:number) => {
    return {type: USERS_PAGE_ACTION_TYPE.SET_CURRENT_PAGE, currentPage} as const
}

type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalUsersCount:number) => {
    return {type: USERS_PAGE_ACTION_TYPE.SET_TOTAL_USERS_COUNT, totalUsersCount} as const
}

type toggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {type: USERS_PAGE_ACTION_TYPE.TOGGLE_IS_FETCHING, isFetching} as const
}


export default usersReducer;
