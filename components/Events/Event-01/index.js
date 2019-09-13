import React from "react";
import LabelNumeric from "../../Labels/LabelNumeric";
import LabelNumericGroup from "../../Labels/LabelNumericGroup";
const Event01= ({}) => (
  <div className="card card-events events-01 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
    <a href="#">
      <div className="card-body">
        <span className="event-day">8</span>
        <span className="event-date">JUL 2019</span>
        <h3 className="event-title">
        SAMOA Pathway High-Level Midterm Review 2019
        </h3>
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

export default Event01;
