import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./SeventhSection.css";

function SeventhSection() {
  return (
    <div className="section7">
      <h1>When are you traveling?</h1>
      <p>Add dates for updated pricing and availability</p>
      <button>Add dates</button>
      <br />
      <div className="section7-location">
        <h3>
          <u>Airbnb</u>
        </h3>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="section7-icon"
          size="xs"
        />
        <h3>
          <u>Stays</u>
        </h3>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="section7-icon"
          size="xs"
        />
        <p>United States</p>
      </div>
    </div>
  );
}

export default SeventhSection;
