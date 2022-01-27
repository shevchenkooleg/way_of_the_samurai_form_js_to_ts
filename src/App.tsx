import React, {ElementType, MouseEventHandler} from 'react';
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
import {addPost} from "./redux/state";

export type postsType = {
    id: number
    post: string
    likeCount: number
}

export type dialogsType = {
    id: number
    name: string
    avaLink: string
}

export type messagesType = {
    id: number
    message: string
    avatarImage: string
}

export type onlineStatusType = {
    id: number
    name: string
    avaLink: string
    isOnline: boolean
}

type AppPropsType = {
    state: {
        profilePage: {
            posts: Array<postsType>
        },
        dialogsPage: {
            dialogs: Array<dialogsType>
            messages: Array<messagesType>
        },
        sideBar: {
            onlineStatus: Array<onlineStatusType>
        }
    }

}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar sideBar={props.state.sideBar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile profilePage={props.state.profilePage}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs dialogsPage={props.state.dialogsPage}/>}/>
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
