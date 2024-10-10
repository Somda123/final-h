import React from 'react';
import './RoomAvailabilityCalendar.css'; // Your existing CSS

const RoomAvailabilityCalendar = () => {
  const today = new Date();
  const month = today.toLocaleString('default', { month: 'long' });
  const year = today.getFullYear();
  
  // Generate dates for the next 7 days
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date);
  }

  // Example room availability data for 7 days
  const roomAvailability = {
    1: [true, false, true, true, false, true, true],
    2: [false, true, true, false, true, false, true],
    3: [true, true, false, true, false, true, false],
    4: [true, false, true, true, false, true, true],
    5: [false, true, true, false, true, false, true],
    6: [true, true, false, true, false, true, false],
  };

  return (
    <div className="room-availability-calenda">
      <h2 className="calendar-titl">{month} {year}</h2>
      
      {/* Legend section above the table */}
      <div className="legend">
        <p style={{ display: 'inline-block', marginRight: '20px' }}>
          <span style={{color: 'green', fontSize: '20px'}}>●</span> Available Room
        </p>
        <p style={{ display: 'inline-block' }}>
          <span style={{fontSize: '20px'}}>🔒</span> Booked Room
        </p>
      </div>

      <div className="calendar-wrapper">
        <div className="calendar-table">
          {/* Render the header with room numbers and the days */}
          <div className="room-header" style={{fontSize:"20px"}}>Room No.</div>
          {dates.map((date, index) => (
            <div key={index} className="date-header">
              {/* Display full day of the week in its own box */}
              <div className="day-box">{date.toLocaleString('default', { weekday: 'long' })}</div>
              {/* Display full date in a separate box */}
              <div className="date-box">{date.toLocaleDateString()}</div>
            </div>
          ))}

          {/* Display room availability */}
          {Object.keys(roomAvailability).map(room => (
            <>
              <div key={room} className="room-item">Room {room}</div>
              {roomAvailability[room].map((available, index) => (
                <div key={index} className="dot-container">
                  {available ? (
                    <span style={{color: 'green', fontSize: '20px'}}>●</span> // Green dot for available room
                  ) : (
                    <span style={{fontSize: '20px'}}>🔒</span> // Red lock emoji for booked room
                  )}
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomAvailabilityCalendar;