import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './RegistrationForm.css';
import LoginForm from './LoginForm';

function RegistrationForm({setLoginStatus, setUserID, loginStatus}) {
  const [registerStatus, SetRegisterStatus] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const [selectedGender, setSelectedGender] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  
/*
  const handleSelectChange = (event) => {
    setSelectedGender(event.target.value);
  };*/

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append("name", username);
    formData.append("email", email);
    formData.append("password", password);
    //formData.append("sex", selectedGender);
    formData.append("profile_picture", image);
   
    /*
    const user = {
       name: username,
       password: password,
       email:email,
      //sex: selectedGender,
      profile_picture:image
    };*/


     //  registration logic here, post to backend
     const createUser = async (userData) => {
      try {
        const response = await axios.post('http://localhost:8080/api/users', userData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(response.data);
        // Handle success
        SetRegisterStatus(true);
      } catch (error) {
        console.error(error.response);
        // Handle error
      }
    }

    createUser(formData);
     /*
     <label >Select gender:
      <select id="gender-select" value={selectedGender} onChange={handleSelectChange}>
        <option value="">--Please select--</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        
      </select>
      </label>*/

    
     
  };

  return (
    <div>
      {registerStatus ? (
        <LoginForm setUserID={setUserID} setLoginStatus={setLoginStatus} loginStatus={loginStatus}/>
      ) : (
    <div className="register-logo">

    <img  src="/HamsderLogo.png" alt="Logo" />
    <form className="registration-form" onSubmit={handleSubmit}>
    <label className="title">Registration</label>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>

      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      
      

      
      <label className="special-label"> Email:
        <input id="email-input" type="email" value={email} onChange={handleEmailChange} />
      </label>

      <label className="special-label2">Upload Icon
        <input id="file-input" type="file" onChange={(e) => setImage(e.target.files[0])} />
      </label>
      
      <button type="submit">Register</button>
      <p>Already have an account? <Link to="/" onClick={() => window.location.href="/"} >Login here</Link></p>
    </form>
    </div>
     )}
     </div>
    
  );
};

export default RegistrationForm;
