import React from "react";
import "./style.scss";

const LabelPoints = ({ status }) => (
  <span className={`label-points ${status}`}>
    <span className="oval"></span>
    <span className="oval"></span>
    <span className="oval"></span>
  </span>
);

export default LabelPoints;
