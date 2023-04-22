import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegistrationForm.css';

function RegistrationForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your registration logic here

  };

  return (
    <div>

    <label className="title">Registration</label>
    <form className="registration-form" onSubmit={handleSubmit}>
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
      <label>
        Confirm Password:
        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
      </label>
      <br />
      <button type="submit">Register</button>
      <p>Already have an account? <Link to="/" onClick={() => window.location.href="/"} >Login here</Link></p>
    </form>
    </div>
    
  );
};

export default RegistrationForm;
