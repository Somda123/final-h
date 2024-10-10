import React from 'react';
import './CheckButton.css'; // Import the CSS for the button

const CheckButton = ({ onClick }) => {
  return (
    <div className="check-button-section">
      <button className="check-button" onClick={onClick}>
        Check
      </button>
    </div>
  );
};

export default CheckButton;
