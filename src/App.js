import React from "react";
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mix from "./components/Mix";
import BookingForm from './components/BookingForm'
function Main (){
    return (
        <Router>
            <Routes>
            <Route path="/" element ={< Mix/>} />
             <Route path="/bookingform" element = {<BookingForm />} />
            </Routes>
        </Router>
    )
}

export default Main ;







































































































// import React from 'react';
// import Header from './components/Header';
// import ImageSlider from './components/ImageSlider';
// import CheckInOutCalendar from './components/CheckInOutCalendar';
// import RoomAvailabilityCalendar from './components/RoomAvailabilityCalendar';
// import TermsAndConditions from './components/TermsAndConditions';
// import Footer from './components/Footer';
// import BookNowButton from './components/BookNowButton'; // Import the Book Now button
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <div className="content-container">
//         <Header />
//         <ImageSlider />
//         <div className="comment">
//           Your Comfort Is Our Priority!
//         </div>
//         <br />
//         <div className="room-heading">
//           <h2 className="room-booking-heading">Check Availability</h2>
//         </div>
//         <CheckInOutCalendar />
//         <br /><br />
//         <div className="payment-methods-comment">
//           All Payment Methods Accepted.
//         </div>
//         <br />
//         <div className="button-container"> {/* Add this div for centering */}
//           <BookNowButton /> {/* Add the Book Now button here */}
//         </div>
//         <br /><br />
//         <RoomAvailabilityCalendar />
//         <br />
//         <TermsAndConditions />
//         <br />
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Main from "./components/Main";
// import './App.css'
// function App(){
//   return <Main/>
// }

// export default App;
