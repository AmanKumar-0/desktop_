import React from 'react'
import logo from "../../assets/logo.svg"
import profile from "../../assets/profile.svg"
import dropdown from "../../assets/dropdown.svg"
import "./Navbar.css"
import Breadcrumbs from '../breadcrumbs/Breadcrumbs'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
    <img src={logo} alt='logo'className='logo'/>
    <div className='nav-tiles'>
        <h4 style={{color: "rgba(128, 0, 128, 0.25)"}}>My Assignment</h4>
        <h4 style={{color: "rgba(128, 0, 128, 0.25)"}}>Chat with Mentor</h4>
        <div className='nav-tiles-profile'>
          <img src={profile} alt='profile'/>
          <h4 style={{color: "#800080"}}>Profile Name</h4>
          <img src={dropdown} alt='dropdown'/>
        </div>
    </div>
    </div>
    <Breadcrumbs/>
    </>
  )
}

export default Navbar