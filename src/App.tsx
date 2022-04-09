import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from "./components/Users/UsersContainer";
import {usersFromServerType, usersPageType} from './redux/redux-store';

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
export type StateType = {
    profilePage: {
        posts: Array<postsType>
        newPostText: string
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
}


function App() {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavbarContainer />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile'
                               element={<Profile />}/>
                        <Route path='/dialogs/*'
                               element={<DialogsContainer />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                    </Routes>
                </div>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
