import React from "react";
import "./style.scss";


const LabelNumeric = ({ children, color }) => (
  <span class={`badge badge-primary ${color}`}>{children}</span>
);

export default LabelNumeric;
