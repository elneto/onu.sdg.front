import React from "react";

import "./style.scss";
import GoalRelated from "../GoalRelated";

const GoalsRelatedBlock = ({ goals }) => (
  <div className="container goals-related-block">
    <div className="heading container">
      <h3>Related SDGS</h3>
    </div>
    <div className="mb-5 row">
      {[...Array(goals).keys()].map(goal => (
        <GoalRelated goal={goal+1} />
      ))}
    </div>
  </div>
);

export default GoalsRelatedBlock;
