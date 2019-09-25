import React from "react";
import "./style.scss";
import GoalRegister from "../GoalRegister";

const GoalsRegisterBlock = ({ goals }) => (
  <section className="goals-register-block">
    <div className="heading row">
      <div className="col-md-7 col-sm-12">
        <h3>Sustainable development goals</h3>
        <p>
          Please select which Sustainable Development Goal(s) and corresponding
          target(s) the initiative is working towards. Click on any Goal to see
          list of targets.
        </p>
      </div>
    </div>
    <div className="mb-5 row row-spacing">
      {[...Array(goals).keys()].map(goal => (
        <GoalRegister goal={goal + 1} />
      ))}
    </div>
  </section>
);

export default GoalsRegisterBlock;
