import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';
import MatchPage from './MatchPage';
import axios from 'axios';

function LoginForm ({setLoginStatus, setUserID, loginStatus}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //  dummy login code for testing
    /*
    if(email=="test" && password=="123"){
      setLoginStatus(true);
      localStorage.setItem('loginStatus', 'true');
      console.log("loginStatus:true")
      return;
    }*/

    const user = {
      email: email,
      password: password
    };
    //post login data to backend, do some code like:

    axios.post('http://localhost:8080/api/users/login', user, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.data.success) {
          // If login is successful, do something here (e.g. redirect to home page)
          console.log('Login successful!');

          setLoginStatus(true);
          localStorage.setItem('loginStatus', 'true');
          setUserID(response.data.id);
          localStorage.setItem('userID', response.data.id);
          console.log(response.data.id);
          //console.log("loginStatus:true")
        } else {
          // If login is not successful, display an alert
          alert(response.data.message);
        }
        console.log(response.data);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error(error);
        alert('An error occurred during login.');
      });
  };



  return (
    <div>
      {loginStatus ? (
        <MatchPage />
      ) : (
    //
    <div className="login-logo">
    <img  src="/HamsderLogo.png" alt="Logo" />
    <form className="login-form" onSubmit={handleSubmit}>
      <label className="title">Login</label>
      <label>
        Email:
        <input type="text" value={email} onChange={handleEmailChange} />
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
