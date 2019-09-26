import React from "react";
import "./style.scss";

const GoalTarget = ({ id }) => (
  <div className="card goal-target col-md-12">
    <div className="card-body">
      <div className="goal-header">
        <img className="goal-logo" src="/static/assets/goals/goal-logo-target.jpg" />
        <div>
          <span className="target">Target</span>
          <h4 className="goal-title">3.1 Reduce maternal mortality</h4>
          <p className="goal-text">
            By 2030, reduce the global maternal mortality ratio to less than 70
            per 100,000 live births.
          </p>
        </div>
      </div>
    </div>
    <div className="indicators">
      <div className="indicators-header">
        <button
          type="button"
          className="btn dropdown-toggle collapsed"
          id="headingOne"
          data-toggle="collapse"
          data-target={`#indicator${id}`}
          aria-expanded="true"
          aria-controls={id}
        >
          Indicators
        </button>
      </div>

      <div
        id={`indicator${id}`}
        className="indicators-collapse collapse"
        aria-labelledby="headingOne"
      >
        <div className="goal-indicator">
          <h5 className="goal-title">
            3.1.1 Oceans Plastic Pollution - Save Marine Life and Human Health
          </h5>
          <p className="goal-text">Maternal mortality ratio.</p>
        </div>
        <div className="goal-indicator">
          <h5 className="goal-title">
            3.1.1 Oceans Plastic Pollution - Save Marine Life and Human Health
          </h5>
          <p className="goal-text">Maternal mortality ratio.</p>
        </div>
      </div>
    </div>
  </div>
);

export default GoalTarget;
