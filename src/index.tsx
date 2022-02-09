import reportWebVitals from './reportWebVitals';
import './index.css'
import store, {stateType} from './redux/redux-store'
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";




let rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe( () => {
    let state = store.getState()
    rerenderEntireTree(state)
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
