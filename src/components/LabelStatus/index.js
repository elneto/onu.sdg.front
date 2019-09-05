import React from "react";
import "./style.scss";

const LabelSatus = ({ children, status }) => (
  <span className={`label-status ${status}`}> {children}</span>
);

export default LabelSatus;
