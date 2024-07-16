import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainContent from '../component/MainContent';
import BookingForm from '../component/BookingForm';
import Content2 from '../component/Content2';
import LoginSection from '../component/LoginSection';
import PujaBooking from '../component/PujaBooking';
import PujaDetails from '../component/PujaDetails';
import PujaPackages from '../component/PujaPackage';



const AllRoutes = () => {
  return (
    
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/booking-form" element={<BookingForm />} />
        <Route path="/content-2" element={<Content2 />} />
        <Route path="/login-section" element={<LoginSection />} />
        <Route path="/puja-booking" element={<PujaBooking/>} />
        <Route path="/puja-details" element={<PujaDetails />} />
        <Route path="/puja-packages" element={<PujaPackages />} />
      </Routes>
   
  );
}

export default AllRoutes;
