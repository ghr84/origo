import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';


var config = {
    apiKey: "AIzaSyCK9GzZcg3IdbfDNkXLMgQtxGkupQiXBNM",
    authDomain: "origo-9df4f.firebaseapp.com",
    databaseURL: "https://origo-9df4f.firebaseio.com",
    projectId: "origo-9df4f",
    storageBucket: "",
    messagingSenderId: "788625521858",
    appId: "1:788625521858:web:f538eecc4667d18a550f5b"
  };

firebase.initializeApp(config); 


ReactDOM.render(
<App />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
