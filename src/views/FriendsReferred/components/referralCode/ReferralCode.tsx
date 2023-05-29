import React from "react";
import "./ReferralCode.css";

// Creating ReferralCode component to display the referral code and wallet balance
const ReferralCode = () => {
  return (
    <div className="friends">
      <div className="friends-container">
        <div className="friends-container1">
          <h3>Your Referral Code </h3>
          <p>&nbsp;EDCH54</p>
        </div>
        <div className="friends-container2">
          <span className="friends-container2-span">
            <h3>Wallet Balance</h3>
            <p>₹ 500</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReferralCode;
