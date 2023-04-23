import React , { useEffect, useState }from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './NavigationBar.css'

function Sidebar(props) {
//contacts should be fetched from backend database
  const myContacts = [
    { id: 1, title: 'Contact 1' },
    { id: 2, title: 'Contact 2' },
    { id: 3, title: 'Contact 3' },
    { id: 4, title: 'Contact 4' },
    { id: 5, title: 'Contact 5' },
  ];

  //fecth my user info from backend
  const myIcon="/hamster1.jpeg";
  //const myName="Yuna";


  const logoutHandler = (event) => {
    props.setLoginStatus(false);
    localStorage.setItem('loginStatus', 'false');
    console.log("loginStatus:false")
    window.location.href = '/';
  };
  const [username, setUsername] = useState('');
  const [icon, setIcon] = useState('');
  const id=localStorage.getItem('userID');

  useEffect(() => {
    axios.get(`http://localhost:8080/api/users/${id}`)
      .then(response => {
        // Handle the profile response from the API
        setUsername(response.data.name);
        setIcon(response.data.profile_picture);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error(error);
        alert('An error occurred while fetching profile information.');
      });
  }, []);

  return (
    
    <div className="sidebar">
      <div className="profile-sidebar">
        <Link to="/profile" onClick={() => window.location.href="/profile"}>
          <img src={`http://localhost:8080/uploads/${icon}`} alt="Your Profile" />
          <h3>{username}</h3>
        </Link>
      </div>
     
      <div className="contacts">
        <h4>Contacts</h4>
        <ul>
          {myContacts.map(contact => (
            <li key={contact.id}>
                <Link to={'/chat'} onClick={() => window.location.href="/chat"} >{contact.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="match_page">
        <Link to="/match"  onClick={() => window.location.href="/match"}>
            <h3>Match more!</h3>
        </Link>
      </div>

      <button  className="logout" type="button" onClick={logoutHandler}>
            Logout
      </button>

    </div>
    
  );
}

export default Sidebar;
