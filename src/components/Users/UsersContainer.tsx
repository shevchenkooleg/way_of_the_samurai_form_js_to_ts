import {connect} from "react-redux";
import Users from "./Users";
import {StateType} from "../../App";
import {changeCurrentPageAC, followAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import { usersFromServerType } from "../../redux/redux-store";

let mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch: Function) => {
    return {
        follow: (userID:number) => {dispatch(followAC(userID))},
        unfollow: (userID:number) => {dispatch(unfollowAC(userID))},
        setUsers: (users:Array<usersFromServerType>) => {dispatch(setUsersAC(users))},
        setCurrentPage: (pageNumber:number) => {dispatch(changeCurrentPageAC(pageNumber))},
        setTotalUsersCount: (totalUsersCount:number) => {dispatch(setTotalUsersCountAC(totalUsersCount))}
        }
    }


let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer