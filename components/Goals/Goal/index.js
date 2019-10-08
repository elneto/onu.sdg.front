import React from "react";
import "./style.scss";

const Goal = ({ goal }) => (
  <div
    className={`card card-goal goal-${goal} col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2`}
    data-toggle="modal"
    data-target={`#goal-${goal}`}
  >
    <a
      href="#"
      style={{
        backgroundImage: `url('/static/assets/goals/images/img-goal-${goal}.jpg')`
      }}
    >
      <div className="card-body">
        <span className="goal-number">{goal}</span>
        <h3 className="goal-title">
          SAMOA Pathway High-Level Midterm Review 2019
        </h3>
        <p className="goal-text">
          End hunger, achieve food security and improved nutrition and promote
          sustainable agriculture.
        </p>
        <div className="goal-info">
          <div className="col-6">
            <span className="number">15</span>
            <p className="feature">targets</p>
          </div>
          <div className="col-6">
            <span className="number">608</span>
            <p className="feature">targets</p>
          </div>
          <div className="col-6">
            <span className="number">20</span>
            <p className="feature">targets</p>
          </div>
          <div className="col-6">
            <span className="number">35</span>
            <p className="feature">targets</p>
          </div>
        </div>
        <button type="button" className="btn btn-goal">
          More info
        </button>
      </div>

      <img
        className="goal-logo"
        src={`/static/assets/goals/logos/goal-logo-${goal}.png`}
        alt="goal logo"
      />
    </a>
  </div>
);

export default Goal;
