import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import FirstPage from './components/FirstPage';
import Login from './components/Login';
import Orders from './components/Orders';

import * as firebase from 'firebase';



function App() { 
  const auth = firebase.auth(); 

  const [loginData, setLoginData] = useState();
  const handleLogin = (e) => {
      setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <FirstPage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/login" exact>
           
            <Login loginData={loginData} auth={auth} handleLogin={handleLogin} setUser={setIsUserLoggedIn}/>
           
          </Route>
          <Route path="/Orders" exact>
            {isUserLoggedIn?
            <Orders auth={auth} setUser={setIsUserLoggedIn}/>
              :"Notandi hefur verið skráður út"
            }
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
