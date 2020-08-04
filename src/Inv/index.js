import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store/store.config';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

var authToken = localStorage.getItem('_scheme');
if(authToken){
    axios.defaults.headers["x-access-token"] = authToken;
}

export default function Index(){
  return(
    <>
     <Provider store={store}>
      <App />
    </Provider>
    </>
  )
}



