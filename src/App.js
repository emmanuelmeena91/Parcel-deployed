import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Nav/NavBar';
import { HomePage } from './Pages/HomePage';
import { ProfilePage } from './Pages/ProfilePage';
import { SendParcelPage } from './Pages/SendParcelPage';
import AdminLogInPage from './Pages/AdminLogIn';
import AdminSignUpPage from './Pages/AdminSignUp';
import LogInPage from './Pages/LogInPage';
import SignUpPage from './Pages/SignUpPage';
import { Details } from './Pages/Details';
import { Tracking } from './Map/Tracking';
import { Payment } from './Pages/Payment';
import UserFooter from './Components/UserFooter';
import LandingPage from './Components/Landing-Page/HomePage';

export default function App() {
  return (
    <Router>
      <>
      <LandingPage />

        {/* <NavBar />  */}
        <Routes> 
          <Route index path="/parcel" element={<HomePage />} />
          <Route index path="/home" element={<HomePage />} />
          <Route path="/sendparcel" element={<SendParcelPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/admin-signup" element={<AdminSignUpPage />} />
          <Route path="/admin-login" element={<AdminLogInPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/sendparcel" element={<SendParcelPage />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/details" element={<Details />} />
        </Routes>

      </>

      <UserFooter />

    </Router>

  );
}
