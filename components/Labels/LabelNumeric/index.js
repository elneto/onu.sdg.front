import React from "react";
import "./style.scss";


const LabelNumeric = ({ children, color }) => (
  <span class={`badge badge-primary ${color}`}><a href="#">{children}</a></span>
);

export default LabelNumeric;
