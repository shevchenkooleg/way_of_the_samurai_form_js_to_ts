import reportWebVitals from './reportWebVitals';
import './index.css'
import store, {storeType} from './redux/state'
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";




let rerenderEntireTree = (store: storeType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store);

store.subscribe(rerenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
