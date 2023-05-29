import React from "react";
import invite from "../../../assets/images/invite.svg";
import referral from "../../../assets/images/referral.svg";
import rupees from "../../../assets/images/rupees.svg";
import discount from "../../../assets/images/discount.svg";
import wallet from "../../../assets/images/wallet.svg";
import "./HowItWorks.css";
import { useNavigate } from "react-router-dom";

/*Creating HowItWorks component
This component is used to display the steps of how the refer and earn works */

type DataType = {
  image: string;
  heading: string;
  description: string;
};

const HowItWorks = () => {
  /* Creating data array to store the data of each step
  Each step has an image, heading and description
  This data is mapped over to display the steps */

  const data: DataType[] = [
    {
      image: invite,
      heading: "Invite your Friends",
      description: "Share the link tutedude.com with your friends",
    },
    {
      image: referral,
      heading: "Friend purchases any course",
      description: "Using your REFERRAL CODE in the payments page",
    },
    {
      image: rupees,
      heading: "You get ₹ 200 as referral money",
      description: "On total purchase the friend makes, into your wallet",
    },
    {
      image: discount,
      heading: "Your Friend gets ₹ 200 Off ",
      description:
        "On his overall fee on successful purchase using your referral code",
    },
    {
      image: wallet,
      heading: "Transfer money from wallet",
      description:
        "When the wallet balance reaches ₹200 or more, you can withdraw it",
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="how-it-works">
      <h2 className="how-it-works-heading">How does it work ?</h2>
      <div className="how-it-works-container">
        {/*  
      Creating a div for each step of the refer and earn
      Each div contains an image, heading and description
      */}
        {data.map((item, index) => {
          return (
            <div className="how-it-works-data" key={index}>
              <img
                className="how-it-works-image-circle"
                src={item.image}
                alt=""
              />
              <div className="how-it-works-data-line">
                <h5>{item.heading}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <h3
        className="how-it-works-friends"
        onClick={() => navigate("/friends-referred")}
      >
        Friends Who Enrolled
      </h3>
      <h3 className="how-it-works-terms">Terms & Conditions</h3>
    </div>
  );
};

export default HowItWorks;
