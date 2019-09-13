import React from "react";
import "./style.scss";

const Event06 = ({}) => (
  <div className="card card-events event-06 col-12">
    <a href="#">
      <div className="card-body">
        <span className="event-date">Monday , 13 May 2019</span>
        <div className="group-hour">
          <span className="event-hour">10:00 AM</span>
          <div className="separator"></div>
          <span className="event-hour">10:40 AM</span>
        </div>
        <p className="event-text">Global Solutions Summits 2019</p>
        <div className="event-place">
          <span className="room">Conference Room 2, UNHQ</span>
          <span className="city">New York</span>
        </div>
        <span className="event-label red">Special Event</span>
      </div>
    </a>
  </div>
);

export default Event06;
