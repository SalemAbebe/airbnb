import React from "react";
import "./FifthSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faStar } from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function FifthSection() {
  return (
    <div className="section5">
      <div className="section5-left ">
        <FontAwesomeIcon icon={faMessage} size="2x" className="icons" />
        <h3>24/7 customer support</h3>
        <p>
          Day or night, we're here for you.Talk to our support team from
          anywhere in the world, any hour of the day.
        </p>
      </div>
      <div className="section5-middle">
        <FontAwesomeIcon icon={faHouse} size="2x" className="icons" />
        {/* <img
          src={process.env.PUBLIC_URL + "/images/house-icon.svg"}
          className="icons1"
          color="#484848"
          alt="house icon"
        /> */}
        <h3>Global hosting requirements</h3>
        <p>
          All hosts must meet hosting requirements and maintain a minimum rating
          to be on Airbnb.
        </p>
      </div>
      <div className="section5-right">
        <FontAwesomeIcon icon={faStar} size="2x" className="icons" />
        <h3>All-start hosts</h3>
        <p>
          From fresh-presses sheets to tips on where to get the best brunch, our
          hosts are full of local hospitality.
        </p>
      </div>
    </div>
  );
}

export default FifthSection;
