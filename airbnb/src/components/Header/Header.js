import React from "react";
import "./Header.css";
// import airbnblogo from "../../images/airbnb-logo.png";

function Header() {
  return (
    <div className="header">
      <div className="airbnb-logo">
        {/* <img src={airbnblogo} /> */}
        <img src={process.env.PUBLIC_URL + "/images/airbnb-logo.png"} />
        <p className="redText">airbnb</p>
      </div>
      <div className="headerLeft">
        <div className="host"> Become a host</div>
        <div className="help">Help</div>
        <div className="signUp">Sign up</div>
        <div className="logIn">Log in</div>
      </div>
    </div>
  );
}

export default Header;
