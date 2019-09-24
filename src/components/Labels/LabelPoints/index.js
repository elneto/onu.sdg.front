import React from "react";
import classNames from "classnames";
import "./style.scss";

const LabelPoints = ({ className }) => (
  <span className={classNames('label-points', className)}> 
    <span className="oval"></span>
    <span className="oval"></span>
    <span className="oval"></span>
  </span>
);

export default LabelPoints;
