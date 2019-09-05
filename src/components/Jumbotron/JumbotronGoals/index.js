import React from "react";
import goalImage from "../../../assets/images/goal-01.svg";
import "./style.scss";

const JumbotronGoals = ({ color }) => (
  <div className={`goals-banner position-relative overflow-hidden ${color}`}>
    <div className="container h-100 d-flex align-items-center">
      <div className="col-lg-5 col-md-6 col-sm-12">
        <a className="goals-link" href="#">
          Goals
        </a>
        <div className="goal-number">3</div>
        <h1>GOOD HEALTH AND WELL-BEING</h1>
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
      <img className="goal-logo" src={goalImage} alt="" />
    </div>
  </div>
);

export default JumbotronGoals;
