import React from "react";
import classNames from "classnames";
import "./style.scss";
const CardNumeric = ({ number, text, className }) => (
  <div className={classNames("card-numeric", className)}>
    <div className="card-body">
      <div className="number">{number}</div>
      <h5 className="text">{text}</h5>
    </div>
  </div>
);

export default CardNumeric;
