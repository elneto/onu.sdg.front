import React from "react";
import classNames from 'classnames';
import "./style.scss";

const Event05 = ({color}) => (
  <div className="card card-events event-05 col-12">
    <a href="#">
      <div className="card-body">
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
        <span className={classNames("event-label", color)}>Special Event</span>
      </div>
    </a>
  </div>
);

export default Event05;
