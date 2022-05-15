import React from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from "./components/Users/UsersContainer";
import {usersPageType} from './redux/redux-store';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";

export type postsType = {
    id: number
    userId: number
    post: string
    likeCount: number
}
export type dialogsType = {
    id: number
    userId: number
    name: string
    avaLink: string
}
export type messagesType = {
    id: number
    userId: number
    message: string
    avatarImage: string
}
export type onlineStatusType = {
    userId: number
    name: string
    avaLink: string
    isOnline: boolean
}
export type ProfileType = {
    aboutMe: string | null,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    userId: number,
    photos: {
        small: string,
        large: string,
    },
}
export type StateType = {
    profilePage: {
        profile: ProfileType
        posts: Array<postsType>
        newPostText: string
        profileStatus: string
        isFetching: boolean
    },
    dialogsPage: {
        dialogs: Array<dialogsType>
        messages: Array<messagesType>
        newMessageText: string
    },
    sideBar: {
        onlineStatus: Array<onlineStatusType>
    }
    usersPage: usersPageType
    auth: {
        id: string | null,
        email: string | null,
        login: string | null,
        isAuth: boolean
    }
}

//This app works with class component
function App() {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavbarContainer />
                <div className='app-wrapper-content'>
                    <Routes>
                        {/*<Route path='/profile'>*/}
                        {/*    <Route index element={<ProfileContainer />}/>*/}
                        {/*    <Route path=':userId' element={<ProfileContainer />}/>*/}
                        {/*</Route>*/}
                        <Route path='/profile/:userId'
                               element={<ProfileContainer />}/>
                        <Route path='/profile/*'
                               element={<ProfileContainer />}/>
                        <Route path='/dialogs/*'
                               element={<DialogsContainer />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/login' element={<LoginContainer/>}/>
                    </Routes>
                </div>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
