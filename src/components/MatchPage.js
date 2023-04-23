
import React , { useEffect, useState }from 'react';
import './MatchPage.css';
import axios from 'axios';
import hamster2 from '../images/hamster2.jpeg';
import hamster3 from '../images/hamster3.jpeg';
import hamster4 from '../images/hamster4.jpeg';
import hamster5 from '../images/hamster5.jpeg';
import hamster6 from '../images/hamster6.jpeg';
import hamster7 from '../images/hamster7.jpeg';


function MatchPage(props) {

  const image = document.querySelector('.rectangle-image img');

  const hamsterImages = [ hamster2, hamster3, hamster4, hamster5, hamster6,hamster7];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  /*
  const id=localStorage.getItem('userID');

  //initial picture
  axios.get(`http://localhost:8080/api/recommendation/${id}`)
  .then(response => {
    // Handle the profile response from the API
    setSelectedImageIndex(response.data.profile_picture);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error(error);
    alert('An error occurred at First picture.');
  });*/

  



  function useHandleNextImage() {

/*
    useEffect(() => {
      axios.get(`http://localhost:8080/api/recommendation/${id}`)
        .then(response => {
          // Handle the profile response from the API
          setSelectedImageIndex(response.data.profile_picture);
          image?.classList?.add('swipe-up');
          setTimeout(() => {
            image.src = `http://localhost:8080/uploads/${selectedImageIndex}`;
            image?.classList?.remove('swipe-up');
          }, 100);
         
        })
        .catch(error => {
          // Handle any errors that occurred during the request
          console.error(error);
          alert('An error occurred while fetching following picture information.');
        });
    }, []);*/

    
    setSelectedImageIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      
      //this line should be removed since we don't want repeated images
      let res=nextIndex < hamsterImages.length ? nextIndex : 0;
      image?.classList?.add('swipe-up');
      setTimeout(() => {
        image.src = hamsterImages[res]? hamsterImages[res]:hamster5;
        image?.classList?.remove('swipe-up');
      }, 100);
      return res;
    });
  }

  const selectedImage = hamsterImages[selectedImageIndex];

  const useHandleYesClick = () => {
    // handle yes click here, add to contact list, mark as seen

    //my id
    
    //the id im looking at

    //handle next image
    useHandleNextImage();
  };

  const useHandleNoClick = () => {
    // handle no click here, mark as seen
    

    //handle next image
    useHandleNextImage();
  };
// <img src={`http://localhost:8080/uploads/${selectedImageIndex}`}  alt="Selected Hamster" />
  return (
    <div className='post'>
      <h1>Cute Hamsters</h1>
      <div  className="rectangle-image">
        
        <img src={selectedImage}  alt="Selected Hamster" />
      </div>

     
        <div className="button-container">
          <button onClick={useHandleYesClick}>Like</button>
          <button onClick={useHandleNoClick}>Pass</button>
        </div>
      
    </div>
  );
}

export default MatchPage;
