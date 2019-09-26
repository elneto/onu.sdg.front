import React from "react";
import "./style.scss";
import classNames from "classnames";

const Select = ({ id, label, className }) => (
  <div className={classNames("form-group", className)}>
    <label for={id}>{label}</label>
    <select className="form-control" id={id}>
      <option>2019</option>
      <option>2018</option>
      <option>2017</option>
      <option>2016</option>
      <option>2015</option>
      <option>2014</option>
    </select>
  </div>
);

export default Select;
