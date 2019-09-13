import React from "react";
import "./style.scss";

const GoalRelated = ({ goal }) => (
  <div className={`card goal-related goal-${goal} col-xs-12 col-md-6 col-lg-4`}>
    <a href="#">
      <div className="card-body">
        <span className="goal-number">{goal}</span>
        <h4 className="goal-title">Life below water</h4>
        <img className="goal-logo" src="/assets/goals/goal-logo-related.png" />
      </div>
    </a>
  </div>
);

export default GoalRelated;
