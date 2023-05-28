import React from 'react'
import logo from "../../assets/images/logo.svg"
import profile from "../../assets/images/profile.svg"
import dropdown from "../../assets/images/dropdown.svg"
import dropdownWhite from "../../assets/images/dropdownWhite.svg"
import "./Navbar.css"
import Breadcrumbs from '../breadcrumbs/Breadcrumbs'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
    <img src={logo} alt='logo'className='logo'/>
    <div className='nav-tiles'>
        <h4 className='nav-assignment'>My Assignment</h4>
        <h4 className='nav-mentor'>Chat with Mentor</h4>
        <div className='nav-tiles-profile'>
          <img className="nav-tile-profile-acc" src={profile} alt='profile'/>
          <h4 className='nav-tile-profile-name'>Profile Name</h4>
          <img className='nav-tile-dropdown' src={dropdown} alt='dropdown'/>
          <img className='nav-tile-white-dropdown' src={dropdownWhite} alt='dropdown'/>
        </div>
    </div>
    </div>
    <Breadcrumbs/>
    </>
  )
}

export default Navbar