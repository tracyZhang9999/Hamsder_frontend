import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegistrationForm.css';

function RegistrationForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [sex, setSex] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const [selectedGender, setSelectedGender] = useState('');

  const handleSelectChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    if(password!=confirmPassword){
      alert('Passwords do not match!');
      return;
    }
    const new_user = {
      username: username,
      password: password,
      sex: selectedGender
    };
     //  registration logic here, post to backend
     fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(new_user)
    })
    .then(response => {
      if (response.ok) {
        // Registration was successful, handle accordingly
      } else {
        // Registration failed, handle accordingly
      }
    })
    .catch(error => {
      // Handle error
    });
    

  };

  return (
    <div>

    
    <form className="registration-form" onSubmit={handleSubmit}>
    <label className="title">Registration</label>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      
      <label >Select gender:
      <select id="gender-select" value={selectedGender} onChange={handleSelectChange}>
        <option value="">--Please select--</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        
      </select>
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
