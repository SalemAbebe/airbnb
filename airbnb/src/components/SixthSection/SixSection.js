import React from "react";
import "./SixSection.css";
import data from "../../utils";
import Booked from "./Booked/Booked";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function SixSection() {
  return (
    <div className="section6">
      <h3>Just booked in United States</h3>
      <div className="booked-places">
        <div className="size2">
          <Booked
            image={data[3].image}
            location={data[3].location}
            rating={data[3].rating}
            numberOfReviewer={data[3].numberOfReviewer}
            detail={data[3].detail}
            price={data[3].price}
            duration={data[3].duration}
          />
        </div>
        <div className="size2">
          <Booked
            image={data[4].image}
            location={data[4].location}
            rating={data[4].rating}
            numberOfReviewer={data[4].numberOfReviewer}
            detail={data[4].detail}
            price={data[4].price}
            duration={data[4].duration}
          />
        </div>
        <div className="size2">
          <Booked
            image={data[5].image}
            location={data[5].location}
            rating={data[5].rating}
            numberOfReviewer={data[5].numberOfReviewer}
            detail={data[5].detail}
            price={data[5].price}
            duration={data[5].duration}
          />
        </div>
        <div className="size2">
          <Booked
            image={data[6].image}
            location={data[6].location}
            rating={data[6].rating}
            numberOfReviewer={data[6].numberOfReviewer}
            detail={data[6].detail}
            price={data[6].price}
            duration={data[6].duration}
          />
        </div>
      </div>
      <button>
        Show (2000+)<span> </span>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
}

export default SixSection;
