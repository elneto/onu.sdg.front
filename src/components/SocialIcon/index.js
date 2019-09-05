import React from "react";
import "./style.scss";

const SocialIcon = ({ icon }) => (
  <a href="#" type="button" className="social-icon">
    <img src={icon} alt="facebook logo" />
  </a>
);

export default SocialIcon;
