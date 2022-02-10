import reportWebVitals from './reportWebVitals';
import './index.css'
import store from './redux/redux-store'
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export type StoreType = any
// export type StoreType = {
//     state: StateType
//     dispatch: (action: string) => void
//     getState: () => {state: StateType}
// }


let rerenderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store);

store.subscribe( () => {
    rerenderEntireTree(store)
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
