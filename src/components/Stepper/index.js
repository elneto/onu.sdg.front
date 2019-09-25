import React from "react";
import "./style.scss";

const Stepper = ({}) => (
  <div className="col-12">
    <div className="stepper">
      <nav class="nav nav-pills">
        <a class="nav-item nav-link completed" href="#">
          <span className="step justify-content-center d-flex align-items-center">
            1
          </span>
          <span className="text">Basic Information and goals</span>
        </a>
        <a class="nav-item nav-link active" href="#">
          <span className="step justify-content-center d-flex align-items-center">
            2
          </span>
          <span className="text">Details</span>
        </a>
        <a class="nav-item nav-link disabled" href="#">
          <span className="step justify-content-center d-flex align-items-center">
            3
          </span>
          <span className="text">
            Deliverables and resources devoted to delivery
          </span>
        </a>
        <a class="nav-item nav-link disabled" href="#">
          <span className="step justify-content-center d-flex align-items-center">
            4
          </span>
          <span className="text">Contact and comments</span>
        </a>
      </nav>
    </div>
  </div>
);

export default Stepper;
