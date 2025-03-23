import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./admin"; // Check path
import Campaign from "./campaign"; // Check path
import Login from "./login";
import Signup from "./signup";
import VolunteerDashboard from "./volunteer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} /> {/* Default route */}
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
