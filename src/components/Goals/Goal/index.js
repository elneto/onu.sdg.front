import React from "react";
import goalLogo from "src/assets/goals/goal-1.jpg";
import goalImage from "src/assets/goals/images/img-goal-1.jpg";
import "./style.scss";

const Goal = ({ goal }) => (
  <div
    className={`card card-goal ${goal} col-6 col-sm-4 col-md-3 col-lg-2`}
    data-toggle="modal"
    data-target={`#${goal}`}
  >
    <a href="#">
      <img src={goalImage} className="goal-image" alt="goal image" />
      <div
        className="modal fade"
        id={goal}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>

          <div class="modal-body">
            <div className="card-body">
              <span className="goal-number">8</span>
              <h3 className="goal-title">
                SAMOA Pathway High-Level Midterm Review 2019
              </h3>
              <p className="goal-text">
                End hunger, achieve food security and improved nutrition and
                promote sustainable agriculture.
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
          </div>
        </div>
      </div>

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

export default Goal;
