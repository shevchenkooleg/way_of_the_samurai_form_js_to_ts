import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

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

export type AppPropsType = {
    state: {
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
    },
    addPost: Function,
    addMessage: Function,
    newPostTextAreaUpdate: Function,
    newMessageTextAreaUpdate: Function

}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar sideBar={props.state.sideBar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile'
                               element={<Profile profilePage={props.state.profilePage} addPost={props.addPost}
                                                 newPostTextAreaUpdate={props.newPostTextAreaUpdate}/>}/>
                        <Route path='/dialogs/*'
                               element={<Dialogs dialogsPage={props.state.dialogsPage} addMessage={props.addMessage}
                                                 newMessageTextAreaUpdate={props.newMessageTextAreaUpdate}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
