import React, { useState } from 'react';
import CheckButton from './CheckButton';
import BookNowButton from './BookNowButton';
import './CheckInOutCalendar.css';

const CheckInOutCalendar = () => {
  // const [checkIn, setCheckIn] = useState(new Date().toISOString());
  const [checkIn, setCheckIn] = useState(new Date().toISOString().split('T')[0]);

  // const [checkIn, setCheckIn] = useState(`${Date().Now}`);
  const [checkOut, setCheckOut] = useState(new Date().toISOString().split('T')[0]);
  const [availability, setAvailability] = useState([]);
  const [showAvailability, setShowAvailability] = useState(false); // New state for visibility

  // Function to check if a date falls between the check-in and check-out date
  const isDateInRange = (roomAvailableDates, checkInDate, checkOutDate) => {
    return roomAvailableDates.some(date => 
      new Date(date) >= new Date(checkInDate) && new Date(date) <= new Date(checkOutDate)
    );
  };

  const handleCheck = () => {
    if (!checkIn || !checkOut) {
      alert('Please select both check-in and check-out dates.');
      return;
    }

    // Example room availability data
    const roomsAvailability = {
      1: ['2024-10-10', '2024-10-11', '2024-10-12'],
      2: ['2024-10-11', '2024-10-12'],
      3: ['2024-10-10'],
      4: ['2024-10-13', '2024-10-14'],
      5: ['2024-10-10', '2024-10-15'],
      6: ['2024-10-12', '2024-10-14'],
    };

    // Determine availability based on the selected check-in and check-out dates
    const rooms = Object.keys(roomsAvailability).map((room) => {
      const available = isDateInRange(roomsAvailability[room], checkIn, checkOut);
      return {
        number: room,
        available: available,
      };
    });

    setAvailability(rooms);
    setShowAvailability(true);
  };

  return (
    <div className="content-container">
      <div className="calendar-container">
        <div className="calendar">
          <label htmlFor="check-in">Check-In:</label>
          <label htmlFor="check-in" style={{ fontSize: '17px', color: 'black' }}>चेक-इन:</label> {/* Hindi label */}
          <input
            type="date"
            className="date-picker"
            id="check-in"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        <div className="calendar">
          <label htmlFor="check-out">Check-Out:</label>
          <label htmlFor="check-out" style={{ fontSize: '16px', color: 'black' }}>चेक-आउट:</label> {/* Hindi label */}
          <input
            type="date"
            className="date-picker"
            id="check-out"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
      </div>
      <div className='button'>
      <CheckButton onClick={handleCheck} />
    <BookNowButton className="bokup" onClick={handleCheck} />
      </div>
    <br></br>
      {/* Conditional rendering for availability status */}
      {showAvailability && (
        <div className="availability-status transparent">
          {availability.map((room) => (
            <div key={room.number} className="room-status">
              <span>Room {room.number}</span>
              <span>{room.available ? 'Available' : 'Not Available'}</span>
              <span style={{ color: room.available ? 'green' : 'red' }}>
                ●
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CheckInOutCalendar;
