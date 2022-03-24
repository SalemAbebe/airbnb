import React from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <div className="search">
      <div className="search-wrapper">
        <div className="xxx">
          <h1>Find places to stay on Airbnb</h1>
          <p>
            Discover the entire homes and private rooms perfect for any trip
          </p>
        </div>
        <div className="searchTxt1">
          <h6>LOCATION</h6>
          <input placeholder="Anywhere"></input>
        </div>
        <div className="date searchTxt1">
          <div className="searchLeft ">
            <h6>CHECK IN</h6>
            <input placeholder="Add Date"></input>
          </div>
          <div className="searchRight">
            <h6>CHECK OUT</h6>
            <input placeholder="Add Date"></input>
          </div>
        </div>
        <div className="age searchTxt1">
          <div className="searchLeft">
            <h6>ADULTS</h6>
            <div className="adults-number">
              <p>2</p>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
          <div className="SearchRight">
            <h6>CHILDREN</h6>
            <div className="children-number">
              <p>0</p>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
        </div>
        <div className="amenities">
          <h6 className="h6">AMENITIES</h6>
          <div className="amenitiesWrapper">
            <div className="amenitiesBtn">
              <button>Hot Tub</button>
              <button>Pool</button>
              <button>Wifi</button>
            </div>
          </div>
        </div>
        <div className="searchBtn">
          <button>
            <FontAwesomeIcon icon={faSearch} />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
