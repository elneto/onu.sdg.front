import React from "react";
import LabelNumeric from "src/components/Labels/LabelNumeric";
import LabelNumericGroup from "src/components/Labels/LabelNumericGroup";

const Event02 = ({}) => (
  <div className="card card-events events-02 col-sm-6 col-lg-3">
    <a href="#">
      <div className="card-body">
        <span className="event-day">8</span>
        <span className="event-date">JUL 2019</span>
        <h4 className="event-title">STI Forum 2019</h4>
        <span className="event-range">Mon 8 - Tue 9 Jul 2019</span>
        <div className="event-place">
          <span className="room">Conference Room 2, UNHQ</span>
          <span className="city">New York</span>
        </div>

        <LabelNumericGroup>
          <LabelNumeric color={"goal-4"}>6</LabelNumeric>
          <LabelNumeric color={"goal-11"}>11</LabelNumeric>
          <LabelNumeric color={"goal-15"}>15</LabelNumeric>
        </LabelNumericGroup>
      </div>
    </a>
  </div>
);

export default Event02;
