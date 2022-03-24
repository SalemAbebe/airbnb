import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <FontAwesomeIcon icon={faCopyright} size="sm" />
        <p> 2022 Airbnb, Inc. All rights reserved</p>

        <li>
          <span>Privacy</span>
        </li>
        <li>
          <span>Terms</span>
        </li>
        <li>
          <span>Site Map</span>
        </li>
      </div>
      <div className="footer-right">
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>
  );
}

export default Footer;
