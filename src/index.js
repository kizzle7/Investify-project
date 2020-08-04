import React from 'react';
import ReactDOM from 'react-dom';
// import './Citi/assets/font-awesome-4.7.0/css/font-awesome.min.css'
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import Show from './temp/router'
import App from './FCMB/App'
// import Show from './temp/router';
// import App from './Internet/app/App'
import Index from './Inv/index'



ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
