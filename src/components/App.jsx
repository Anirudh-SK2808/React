import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./admin.jsx"; 
import Campaign from "./campaign.jsx"; 
import Login from "./login.jsx";
import Signup from "./signup.jsx";
import VolunteerDashboard from "./volunteer.jsx";
ss
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} /> 
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/volunteer" element={<VolunteerDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
