import React from 'react';
import './Profile.css';
function ProfilePage(props) {

  //user icon, name , sex should be fetched from backend
  const myIcon="/hamster1.jpeg";
  const myName="Yuna";
  const mySex="female";

  return (
    <div className='profile'>
      <img src={myIcon} alt="Profile Icon" />
      <h1>{myName}</h1>
      <h2>{mySex}</h2>
    </div>
  );
}

export default ProfilePage;
