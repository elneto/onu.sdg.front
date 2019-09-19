import React from "react";
import "./style.scss";

const HeadingInfo = ({ number, text }) => (
  <div className="headinginfo">
    <p className="headinginfo-number">{number}</p>
    <p className="headinginfo-text">{text}</p>
  </div>
);

export default HeadingInfo;
