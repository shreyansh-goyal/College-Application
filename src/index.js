import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import axios from "axios";
import {jwtToken} from "./services/Common.service";

axios.interceptors.request.use(request => {
    if(request.url!="http://localhost:1337/auth/local"&&request.url!="http://localhost:1337/auth/local/register")
    {
        request.headers={
            Authorization:jwtToken()
        }
        return request;
    }
    console.log("This url does not require the bearer");
    return request
  })
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
