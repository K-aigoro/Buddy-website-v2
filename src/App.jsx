// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signupscreen from "./pages/signupscreen";
import Signupactive from "./pages/signup";
import Verify from "./pages/verify";
import Otpload from "./pages/otp";
import LoginPage from "./pages/loginPage";
import Portfolio from "./pages/portfolio";
import Checkedmail from "./pages/checkedMail";

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Signupscreen />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/register" element={<Signupactive />} />
        <Route path="/checkMail" element={<Checkedmail />} />
        <Route path="/verifyEmail" element={<Verify />} />
        <Route path="/otp" element={<Otpload />} />
        <Route path="/login" element={<LoginPage />} />
        </Routes>
        {/* Add more routes here if needed */}
    </Router>
  );
}

export default App;
