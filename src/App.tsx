import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import LandingPage from './landingPage/LandingPage';
import FriendsReferred from './views/FriendsReferred/FriendsReferred';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route index path="/" element={<LandingPage/>}/>
        <Route path="/friends-referred" element={<FriendsReferred/>}/>
      </Routes>
    </div>
  );
}

export default App;
