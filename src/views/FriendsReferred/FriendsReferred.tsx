import React from 'react'
import FriendsEnrolled from './components/friendsEnrolled/FriendsEnrolled'
import ReferralCode from './components/referralCode/ReferralCode'
import "./FriendsReferred.css"

const FriendsReferred = () => {
  return (
    <div className='Friends'>      
      <ReferralCode/>
      <FriendsEnrolled/>
    </div>
  )
}

export default FriendsReferred