import React from "react";
import LabelNumeric from "../../Labels/LabelNumeric";
import LabelNumericGroup from "../../Labels/LabelNumericGroup";
import "./style.scss";

const Event03 = ({}) => (
  <div className="card card-events event-03 col-xl-3 col-lg-3 col-md-3 col-sm-12">
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

        <LabelNumericGroup>
          <LabelNumeric color={"goal-15"}>15</LabelNumeric>
          <LabelNumeric color={"goal-16"}>16</LabelNumeric>
        </LabelNumericGroup>
      </div>
    </a>
  </div>
);

export default Event03;
