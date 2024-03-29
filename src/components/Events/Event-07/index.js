import React from "react";
import "./style.scss";

const Event07 = ({}) => (
  <div className="col-12">
    <div className="card card-events event-07">
      <a href="#">
        <div className="card-body">
          <div className="event-logo">
            <img src="/assets/images/event-logo.png" alt="event logo" />
          </div>
          <div className="group-date">
            <span className="event-day">11</span>
            <span className="event-date">JUL 2019</span>
          </div>
          <p className="event-text">
            The 2030 Agenda Partnership Accelerator is an initiative aimed at
            accelerating and scaling up effective partnering across all
            stakeholders to deliver transformational impact for the Sustainable
            Development Goals (SDGs).
          </p>
          <div className="event-place">
            <span className="room">Conference Room 2, UNHQ</span>
            <span className="city">New York</span>
          </div>
        </div>
      </a>
    </div>
  </div>
);

export default Event07;
