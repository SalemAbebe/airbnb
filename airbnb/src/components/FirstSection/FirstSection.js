import React from "react";
import "./FirstSection.css";
import Search from "./Search/Search";

function FirstSection() {
  return (
    <div className="section1">
      <div className="searchPlaces">
        <Search />
      </div>
      <div className="rightImg">
        <img
          src={process.env.PUBLIC_URL + "/images/houseInForest1.jpg"}
          alt="house"
        />
      </div>
    </div>
  );
}

export default FirstSection;
