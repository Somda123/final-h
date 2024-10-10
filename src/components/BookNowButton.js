import React from 'react';
import './BookNowButton.css'; // Create a CSS file for styles if needed
import { useNavigate } from 'react-router-dom';
const BookNowButton = () => {
  const navgigate =useNavigate()
  function handleBook(){
    navgigate ('/bookingform')
  }
  return (
    <button onClick={handleBook} className="book-now-button">
      Book Now
    </button>
  );
};

export default BookNowButton;
