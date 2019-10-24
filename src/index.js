import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import axios from "axios";
// axios.interceptors.request.use(request => {
//     if(request.url!="http://18.190.25.34:1337/auth/local/register")
//     {
//         const token = localStorage.getItem('token');
//         request.headers.Authorization =  token;
    
//         return request;
//     }
//     return request
//   })
//const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
