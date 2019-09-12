import React from "react";
import Goal from "../Goal";
import GlobalGoal from "../GlobalGoal";

const GoalsWrapper = ({ goals }) => (
  <div className="container-full">
    <div className="container">
      <div className="heading-block">
        <h2>THE 17 GOALS</h2>
      </div>
    </div>
    <div className="mb-5 row">
      {[...Array(goals).keys()].map(goal => (
        <Goal goal={`goal-${goal + 1}`} />
      ))}
      <GlobalGoal />
    </div>
  </div>
);

export default GoalsWrapper;
