import React, { JSXElementConstructor } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {postsType, ProfileType, StateType} from "../../App";
import {
    addPost,
    getUserProfile,
    newPostTextAreaUpdate,
} from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";

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
    newPostText: string
    addPost: () => void
    isFetching: boolean
    isAuth: boolean
    newPostTextAreaUpdate: (text: string) => void
    getUserProfile: (userId: number) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount = () => {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = '23136'
        }
        this.props.getUserProfile(Number(userId))
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
    isAuth: state.auth.isAuth,
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
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,
    {addPost, newPostTextAreaUpdate, getUserProfile}) (WithUrlDataContainerComponent);