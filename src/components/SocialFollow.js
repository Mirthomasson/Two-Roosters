import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
  import '../App.css'

export default function SocialFollow() {
  return (
    <div class="social-container">
    <a href="https://www.facebook.com/tworoosters/"
        className="facebook social" target='_blank' rel="noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.instagram.com/thetworoosters/"
        className="instagram social" target='_blank' rel="noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
</div>
  );
}