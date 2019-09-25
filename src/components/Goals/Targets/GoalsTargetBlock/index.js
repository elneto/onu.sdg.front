import React from "react";
import GoalTarget from "../GoalTarget";
import Heading from "../../../Heading";

const GoalsTargetBlock = () => (
  <section className="container goals-related-block">
    <Heading text="TARGETS & INDICATORS" size="big" />
    <div className="mb-5 row row-spacing">
      {[...Array(4).keys()].map(item => (
        <GoalTarget id={item} />
      ))}
    </div>
  </section>
);

export default GoalsTargetBlock;
