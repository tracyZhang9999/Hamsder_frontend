import React, { useState } from 'react';
import './MatchPage.css';
import hamster2 from '../images/hamster2.jpeg';
import hamster3 from '../images/hamster3.jpeg';
import hamster4 from '../images/hamster4.jpeg';
import hamster5 from '../images/hamster5.jpeg';




function MatchPage(props) {

  const image = document.querySelector('.rectangle-image img');
  const hamsterImages = [ hamster2, hamster3, hamster4, hamster5];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  function handleNextImage() {
    setSelectedImageIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      
      //this line should be removed since we don't want repeated images
      let res=nextIndex < hamsterImages.length ? nextIndex : 0;


      image.classList.add('swipe-up');
      setTimeout(() => {
        image.src = hamsterImages[res];
        image.classList.remove('swipe-up');
      }, 100);
      return res;
    });
  }

  const selectedImage = hamsterImages[selectedImageIndex];

  const handleYesClick = () => {
    // handle yes click here, add to contact list, mark as seen

    
    //handle next image
    handleNextImage();
  };

  const handleNoClick = () => {
    // handle no click here, mark as seen
    

    //handle next image
    handleNextImage();
  };

  return (
    <div className='post'>
      <h1>Cute Hamsters</h1>
      <div  className="rectangle-image">
        
        <img src={selectedImage} alt="Selected Hamster" />
      </div>

     
        <div className="button-container">
          <button onClick={handleYesClick}>Like</button>
          <button onClick={handleNoClick}>Pass</button>
        </div>
      
    </div>
  );
}

export default MatchPage;
