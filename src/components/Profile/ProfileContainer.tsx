import React, { JSXElementConstructor } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {postsType, ProfileType, StateType} from "../../App";
import {
    addPost,
    getUserProfile,
    getUserStatus,
    updateStatus,
} from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type RouterType = {
    location: any
    navigate: any
    params: {
        userId: string
    }
}

type ProfileContainerPropsType = {
    profile: ProfileType
    posts: Array<postsType>
    router: RouterType
    addPost: () => void
    isFetching: boolean
    profileStatus: string
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateStatus: (newStatus: string) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount = () => {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = '23136'
        }
        this.props.getUserProfile(Number(userId))
        this.props.getUserStatus(Number(userId))
    }


    render = () => {
        return (
        <div>
            {this.props.isFetching ? <Preloader/> : null}
            <Profile {...this.props}/>
        </div>
        )
    }
}

let mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    isFetching: state.profilePage.isFetching,
    profileStatus: state.profilePage.profileStatus,
});


export const  withRouter=(Component:JSXElementConstructor<any>):JSXElementConstructor<any>=> {
    function ComponentWithRouterProp(props:any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

// let WithUrlDataContainerComponent = withRouter(ProfileContainer)
//
// export default withAuthRedirect(connect(mapStateToProps,
//     {addPost, newPostTextAreaUpdate, getUserProfile}) (WithUrlDataContainerComponent));


export default compose<React.ComponentType>(
    connect(mapStateToProps, {addPost, getUserProfile, getUserStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)