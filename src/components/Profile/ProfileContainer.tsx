import React, { JSXElementConstructor } from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import {postsType, ProfileType, StateType} from "../../App";
import {addPost, newPostTextAreaUpdate, setUserProfile, toggleIsFetching} from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import {profileAPI} from "../../api/api";

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
    newPostTextAreaUpdate: (text: string) => void
    setUserProfile: (profile: ProfileType) => void
    toggleIsFetching: (isFetching: boolean) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount = () => {
        this.props.toggleIsFetching(true)
        // console.log(this.props.router.params)
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = '2'
        }
        profileAPI.getProfile(userId).then(response => {
            this.props.setUserProfile(response.data)
            this.props.toggleIsFetching(false)
        });
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
    {addPost, newPostTextAreaUpdate, setUserProfile, toggleIsFetching}) (WithUrlDataContainerComponent);