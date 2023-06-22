import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginComponent from "./LoginComponents/LoginComponent";
import SignUp from "./LoginComponents/SignUp";
import ForgotPassword from "./LoginComponents/ForgotPassword";
import OtpVerification from "./LoginComponents/OtpVerification";

const Login = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/otp" element={<OtpVerification />} />
      </Routes>
    </Router>
  );
};

export default Login;
