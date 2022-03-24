import React from "react";
import "./FourthSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function FourthSection(props) {
  return (
    <div className="section4">
      <img src={props.image} alt="house picture" />
      <div className="rating">
        <FontAwesomeIcon icon={faStar} color="red" />
        <FontAwesomeIcon icon={faStar} color="red" />
        <FontAwesomeIcon icon={faStar} color="red" />
        <FontAwesomeIcon icon={faStar} color="red" />
        <FontAwesomeIcon icon={faStar} color="red" />
      </div>
      <div className="reviewText">
        <p>{props.review}</p>
      </div>
      <div className="profile">
        <div className="userPhoto">
          <img src={props.userPhoto} alt="profile picture" />
        </div>
        <div className="name-address">
          <p className="name">{props.userName}</p>
          <p className=" location">{props.userLocation}</p>
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
