import React, { useState } from 'react';
import './MatchPage.css';
import hamster2 from '../images/hamster2.jpeg';
import hamster3 from '../images/hamster3.jpeg';
import hamster4 from '../images/hamster4.jpeg';
import hamster5 from '../images/hamster5.jpeg';




function MatchPage(props) {

  const hamsterImages = [ hamster2, hamster3, hamster4, hamster5];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  //const [showConfirmation, setShowConfirmation] = useState(true);

  function handleNextImage() {
    setSelectedImageIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex < hamsterImages.length ? nextIndex : 0;
    });
  }

  const selectedImage = hamsterImages[selectedImageIndex];

  const handleYesClick = () => {
    // handle yes click here
    
  };

  const handleNoClick = () => {
    // handle no click here
    
  };

  return (
    <div className='post'>
      <h1>Cute Hamsters</h1>
      <div  className="rectangle-image">
        
        <img src={selectedImage} alt="Selected Hamster" />
      </div>

     
        <div className="button-container">
          <button onClick={handleNextImage}>Like</button>
          <button onClick={handleNextImage}>Pass</button>
        </div>
      
    </div>
  );
}

export default MatchPage;
