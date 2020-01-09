import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import axios from "axios";
import {jwtToken} from "./services/Common.service";
import backendConnectivity from "./config/backendConnectivity";
import { browserHistory } from 'react-router';

axios.interceptors.request.use(request => {
    if(request.url!=(backendConnectivity.baseUrl+"/auth/local")&&request.url!=(backendConnectivity.baseUrl+"/auth/local/register")&&request.url!=(backendConnectivity.baseUrl+"/auth/local/admin")&&request.url!=(backendConnectivity.baseUrl+"/auth/local/teacher"))
    {
        if(jwtToken().length>15)
        {
            request.headers={
                Authorization:jwtToken(),
            }            
        }
        else
        {
            ;
        }
    }
    console.log(request);
    return request
  })
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
serviceWorker.unregister();
