import React from "react";
import GoalTarget from "../GoalTarget";
import Heading from "../../../Heading";

const GoalsTargetBlock = () => (
  <div className="container goals-related-block">
    <Heading text="TARGETS & INDICATORS" size="big" />
    <div className="mb-5 row row-spacing">
      {[...Array(4).keys()].map(item => (
        <GoalTarget id={item} />
      ))}
    </div>
  </div>
);

export default GoalsTargetBlock;
