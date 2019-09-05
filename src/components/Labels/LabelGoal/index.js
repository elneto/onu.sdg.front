import React from "react";
import "./style.scss";

const LabelGoal = ({ children }) => (
  <button type="button" class="label-goal">
    {children}
    <span class="close-icon"></span>
  </button>
);

export default LabelGoal;
