import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';
import MatchPage from './MatchPage';
import ProfilePage from './Profile';

function LoginForm (props){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //  dummy login code for testing
    if(username=="test" && password=="123"){
      props.setLoginStatus(true);
      localStorage.setItem('loginStatus', 'true');
      console.log("loginStatus:true")
      return;
    }

    const user = {
      username: username,
      password: password
    };
    //post login data to backend, do some code like:

    fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the API
        console.log(data);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };



  return (
    <div>
      {props.loginStatus ? (
        <MatchPage />
      ) : (
    //
    <div className="login-logo">
    <img  src="/HamsderLogo.png" alt="Logo" />
    <form className="login-form" onSubmit={handleSubmit}>
      <label className="title">Login</label>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit" >Login</button>
      <p>Not a member yet? <Link to="/register" onClick={() => window.location.href="/register"} >Register here</Link></p>
    </form>
    </div>

      )}
    </div>
  );
};



export default  LoginForm;
