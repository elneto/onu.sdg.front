import React from "react";
import "./style.scss";

const Event04 = ({ featured }) => (
  <div className="card card-events event-04 col-12">
    <a href="#">
      <div className="card-body">
        <div className="group-date">
          <div>
            <span className="event-date">WED</span>
            <span className="event-day">10</span>
          </div>
          <div className="separator"></div>
          <div>
            <span className="event-date">TUE</span>
            <span className="event-day">18</span>
          </div>
        </div>
        <div className="group-text">
          <h5 className="event-title">
            High-Level Political Forum 2019 (HLPF 2019)
          </h5>
          <p className="event-text">
            Effective partnerships for addressing gaps and priority areas
          </p>
        </div>
        <div className="event-place">
          <span className="room">Conference Room 2, UNHQ</span>
          <span className="city">New York</span>
        </div>
        {featured && <span className="featured">Featured</span>}
      </div>
    </a>
  </div>
);

export default Event04;
