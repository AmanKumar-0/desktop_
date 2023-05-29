import React from "react";
import "./ReferAndEarn.css";

// Creating ReferAndEarn component
const ReferAndEarn = () => {
  return (
    <div className="referral">
      <div className="refer-and-earn">
        <div className="Referral1">
          <h6 className="card-heading">Referral Earning</h6>
          <h1 className="card-value">₹ 2,500</h1>
        </div>
        <div className="Referral2">
          <h6 className="card-heading">Total Referrals</h6>
          <h1 className="card-value">7</h1>
        </div>
        <div className="Referral3">
          <h6 className="card-heading">Wallet Balance</h6>
          <h1 className="card-value">₹ 500</h1>
        </div>
        <div className="Referral4">
          <h6 className="withdraw">Withdraw Balance</h6>
        </div>
      </div>
      <div className="referral-code">
        <h3 className="referral-code-heading">Your Referral Code</h3>
        <div className="referral-code-value">
          <h4 className="referral-code-value-show">&emsp;EDCH54</h4>
        </div>
      </div>
    </div>
  );
};

export default ReferAndEarn;
