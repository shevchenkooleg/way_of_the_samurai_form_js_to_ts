import {connect} from "react-redux";
import Users, {usersFromServerType} from "./Users";
import {StateType} from "../../App";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import {usersType} from "../../redux/redux-store";
import UsersC from "./UsersC";

let mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Function) => {
    return {
        follow: (userID:number) => {dispatch(followAC(userID))},
        unfollow: (userID:number) => {dispatch(unfollowAC(userID))},
        setUsers: (users:Array<usersFromServerType>) => {dispatch(setUsersAC(users))}
        }
    }


let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)

export default UsersContainer