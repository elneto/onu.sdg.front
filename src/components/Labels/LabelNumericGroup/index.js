import React from "react";
import "./style.scss";

const LabelNumericGroup = ({ children }) => (
  <div className="label-group">
    <span className="label-group-text">Related Goals</span>
    <div className="label-group-content">{children}</div>
  </div>
);

export default LabelNumericGroup;
