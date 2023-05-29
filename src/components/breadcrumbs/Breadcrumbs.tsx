import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Breadcrumbs.css";

const Breadcrumbs = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <div className="breadcrumbs">
      UI/UX {">"}{" "}
      <span className="breadcrumbs1" onClick={() => navigate("/")}>
        Refer & Earn
      </span>
      {/* 
      If location is /friends-referred, then display the following:
      */}
      {location === "/friends-referred" && (
        <span
          className="breadcrumbs1"
          onClick={() => navigate("/friends-referred")}
        >
          {">"} Friends Referred
        </span>
      )}
    </div>
  );
};

export default Breadcrumbs;
