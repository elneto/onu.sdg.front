import React from "react";
import GoalTarget from "../GoalTarget";

const GoalsTargetBlock = () => (
  <div className="container goals-related-block">
    <div className="heading-block row">
      <div className="col-12">
        <h2>TARGETS & INDICATORS</h2>
      </div>
    </div>
    <div className="mb-5 row row-spacing">
      {[...Array(4).keys()].map(item => (
        <GoalTarget id={item} />
      ))}
    </div>
  </div>
);

export default GoalsTargetBlock;
