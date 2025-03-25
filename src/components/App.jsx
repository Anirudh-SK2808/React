import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./admin";
import CampaignReview from "./campaign";
import Index from "./index1";
import Login from "./login";
import Signup from "./signup";
import Volunteer from "./volunteer";





export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Index />} />
          <Route path="admin" element={<Admin />} />
          <Route path="campaign" element={<CampaignReview />} />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<Signup />} />
          <Route path="volunteer" element={<Volunteer />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


