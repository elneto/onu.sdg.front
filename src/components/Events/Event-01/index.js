import React from "react";
import LabelNumericGroup from "src/components/Labels/LabelNumericGroup";
const Event01 = ({}) => (
  <div className="card card-events events-01 col-12 col-sm-6 col-md-6 col-lg-4">
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

        <LabelNumericGroup goals={3} />
      </div>
    </a>
  </div>
);

export default Event01;
