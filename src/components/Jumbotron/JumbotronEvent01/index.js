import React from "react";
import '../event.scss';
import "./style.scss";

const JumbotronEvent01 = ({ color }) => (
  <div className="jumbotron-event jumbotron-event-01">
    <div className="container">
      <div className="jumbotron-content col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <a className="event-link" href="#" role="button">
          Events
        </a>
        <h1>STI FORUM 2019</h1>
        <span className="date">Mon 8 - Tue 9 Jul 2019</span>
        <h2>
          4th annual Multi-stakeholder Forum on Science, Technology and
          Innovation for the Sustainable Development Goals
        </h2>
        <div className="place">
          <span>Conference Room 2, UNHQ</span>
          <span>New York</span>
        </div>
        <div className="goals">
          <h3>Related</h3>
          <div className="goals-content"></div>
        </div>
      </div>
    </div>
  </div>
);

export default JumbotronEvent01;
