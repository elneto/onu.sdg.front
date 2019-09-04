import React from "react";
import "./style.scss";

const Select = ({ id, label }) => (
  <div className="form-group">
    <label for={id}>{label}</label>
    <select className="form-control" id={id}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
);

export default Select;
