import React from "react";
import "./style.scss";
import goalLogo from "src/assets/goals/goal-1.jpg";
import goalImage from "src/assets/goals/img-goal-1.jpg";
const Goal01 = ({ goal }) => (
  <div className={`card card-goal ${goal}`}>
    <a href="#">
      <img src={goalImage} className="goal-image" alt="goal image" />
      <div className="card-body">
        <span className="goal-number">8</span>
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
      <img className="goal-logo" src={goalLogo} alt="goal logo" />
    </a>
  </div>
);

export default Goal01;
