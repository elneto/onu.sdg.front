import React from "react";
import "./style.scss";
import LabelNumeric from "../LabelNumeric";

const LabelNumericGroup = ({ goals }) => (
  <div className="label-group">
    <span className="label-group-text">Related Goals</span>
    <div className="label-group-content">
      {[...Array(goals).keys()].map(goal => (
        <LabelNumeric color={`goal-${goal + 1}`}>{goal + 1}</LabelNumeric>
      ))}
    </div>
  </div>
);

export default LabelNumericGroup;
