import React from "react";
import "./style.scss";

const Input = ({ id, type, placeholder }) => (
  <div className="form-group">
    <label for={id}>This field is required</label>
    <input type={type} class="form-control" id={id} placeholder={placeholder} />
  </div>
);

export default Input;
