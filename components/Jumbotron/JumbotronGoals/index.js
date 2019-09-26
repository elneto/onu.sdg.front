import React from "react";
import "./style.scss";

const JumbotronGoals = ({ goal }) => (
  <div
    className={`goals-banner position-relative overflow-hidden goal-${goal}`}
  >
    <div className="container h-100 d-flex align-items-center">
      <div className="col-lg-5 col-md-6 col-sm-12">
        <a className="goals-link" href="#">
          Goals
        </a>
        <div className="goal-number">{goal}</div>
        <h1 className="separator-bottom">GOOD HEALTH AND WELL-BEING</h1>
        <p className="lead">
          Ensure healthy lives and promote well-being for all at all ages
        </p>
        <div className="d-flex">
          <button
            type="button"
            className="btn btn-outline-light left d-flex align-items-center"
          >
            Prev
          </button>
          <button
            type="button"
            className="btn btn-outline-light right d-flex align-items-center"
          >
            Next
          </button>
        </div>
      </div>
      <img className="goal-logo" src='/static/assets/images/goal-01.svg"' alt="" />
    </div>
  </div>
);

export default JumbotronGoals;
