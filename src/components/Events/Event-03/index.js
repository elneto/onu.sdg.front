import React from "react";

import LabelNumericGroup from "src/components/Labels/LabelNumericGroup";
import "./style.scss";

const Event03 = ({}) => (
  <div className="card card-events event-03 col-sm-6 col-lg-3">
    <a href="#">
      <div className="card-body">
        <span className="event-day">8</span>
        <span className="event-date">JUL 2019</span>
        <h4 className="event-title">STI Forum 2019</h4>
        <span className="event-range">Mon 8 - Tue 9 Jul 2019</span>
        <p className="event-text">
          Heads of State and Government will gather at the UNHQ in NY to follow
          up and comprehensively review progress.
        </p>
        <div className="event-place">
          <span className="room">Conference Room 2, UNHQ</span>
          <span className="city">New York</span>
        </div>

        <LabelNumericGroup goals={3} />
      </div>
    </a>
  </div>
);

export default Event03;
