import React from "react";
import Link from "src/components/Common/Link";
import "./style.scss";

const GoalRegister = ({ goal }) => (
  <div
    className={`card goal-register goal-${goal} col-xs-12 col-md-6 col-lg-4`}
  >
    <div className="card-body">
      <div className="goal-label">
        <span className="goal-number">{goal}</span>
        <img className="d-none" src="/assets/images/check.svg" />
      </div>
      <div className="goal-content">
        <h4 className="goal-title">Life below water</h4>
        <div className="goal-link">
          <div className="goal-targets">
            <div className="target">1.1</div>
            <div className="target">1.1</div>
            <div className="target">1.1</div>
            <div className="target">1.1</div>
          </div>
          <Link>Add targets</Link>
        </div>
      </div>
    </div>
  </div>
);

export default GoalRegister;
