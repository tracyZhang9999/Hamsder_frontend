import React , { useEffect, useState }from 'react';
import axios from 'axios';
import './Profile.css';
function ProfilePage(props) {


  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [icon, setIcon] = useState('');
  //const [sex, setSex] = useState('');
  const id=localStorage.getItem('userID');

  useEffect(() => {
    axios.get(`http://localhost:8080/api/users/${id}`)
      .then(response => {
        // Handle the profile response from the API
        setUsername(response.data.name);
        setEmail(response.data.email);
        console.log(response.data);
        console.log(response.data.profile_picture);
        setIcon(response.data.profile_picture);
        //setSex(sex);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error(error);
        alert('An error occurred while fetching profile information.');
      });
  }, []);

  //user icon, name , sex should be fetched from backend
  const myIcon="/hamster1.jpeg";
  //const myName="Yuna";
  //const mySex="female";

  //<h2>{mySex}</h2>
  return (
    <div className='profile'>
      <img src={`http://localhost:8080/uploads/${icon}`} alt="Profile Icon" />
      <h1>{username}</h1>
      <h2>{email}</h2>
    </div>
  );
}

export default ProfilePage;
