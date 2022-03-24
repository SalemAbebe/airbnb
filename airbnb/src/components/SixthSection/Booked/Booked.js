import React from "react";
import "./Booked.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Booked(props) {
  return (
    <div className="booked">
      <div className="booked-img">
        <img src={props.image} alt="house" />
      </div>
      <div className="location-rating">
        <div className="booked-location">
          <p>{props.location}</p>
        </div>
        <div className="booked-rating">
          <FontAwesomeIcon icon={faStar} color="red" size="xs" />
          <p>{props.rating}</p>
          <p>{props.numberOfReviewer}</p>
        </div>
      </div>
      <div className="price">
        <p>{props.detail}</p>
        <p>
          <strong>{props.price}</strong> {props.duration}
        </p>
      </div>
    </div>
  );
}

export default Booked;
