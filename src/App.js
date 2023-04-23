import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
//import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import './App.css';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import MatchPage from './components/MatchPage';
import ProfilePage from './components/Profile';
import Sidebar from './components/NavigationBar';
import ChatBox from './components/chat';

function App() {

  const [loginStatus, setLoginStatus] = useState(false);
  const [userID, setUserID] = useState(0);
  //this status need to be updated by login form

  useEffect(() => {
    // Check local storage for login status on app load
    const storedLoginStatus = localStorage.getItem('loginStatus');
    const storedUserID = localStorage.getItem('userID');
    if (storedLoginStatus === 'true') {
      setLoginStatus(true);
    }
    if (storedUserID != 0 ) {
      setUserID(storedUserID);
    }
  }, []);

  // const handleUsernameChange = (event) => {
  //   setLoginStatus(event.target.value);
  // };
  return (
    <div>
      
    
    <Router>
    {loginStatus && <Sidebar  setLoginStatus={setLoginStatus}/>}
     
      <Switch>
          <Route exact path="/">
            <LoginForm setUserID={setUserID} setLoginStatus={setLoginStatus} loginStatus={loginStatus}/>
            </Route> 
          <Route path="/register">
            <RegistrationForm setUserID={setUserID} setLoginStatus={setLoginStatus} loginStatus={loginStatus}/>
            </Route> 
          <Route path="/match">
            <MatchPage/>
            </Route> 
          <Route path="/profile">
            <ProfilePage userID={userID}/>
            </Route> 
          <Route path="/chat">
            <ChatBox/>
            </Route> 
      </Switch>
      

    </Router>
    </div>
  );
}

export default App;
