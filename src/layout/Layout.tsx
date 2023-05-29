import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import LandingPage from "../landingPage/LandingPage";
import FriendsReferred from "../views/FriendsReferred/FriendsReferred";

// Creating Base Layout and adding routes
const Layout = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route path="/friends-referred" element={<FriendsReferred />} />
      </Routes>
    </div>
  );
};

export default Layout;
