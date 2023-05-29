import React from "react";
import HowItWorks from "./components/howItWorks/HowItWorks";
import ReferAndEarn from "./components/referAndEarn/ReferAndEarn";

// Creating LandingPage component and adding components
const LandingPage = () => {
  return (
    <div>
      <ReferAndEarn />
      <HowItWorks />
    </div>
  );
};

export default LandingPage;
