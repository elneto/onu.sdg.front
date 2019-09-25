import React from "react";
import Link from "../../Common/Link";

const JumbotronEvent03 = ({ color }) => (
  <div className="jumbotron-event jumbotron-event-03 grey">
    <div className="container">
      <div className="row">
        <div className="  col-sm-12 col-md-6 col-lg-4 ">
          <a className="event-link" href="#" role="button">
            Events
          </a>
          <h2>2030 AGENDA PARTNERSHIPS ACCELERATOR</h2>
          <span className="date">11 April 2019</span>
          <div className="place">
            <span>UNHQ</span>
            <span>New York</span>
          </div>
          <Link>Visit the website</Link>
        </div>
      </div>
    </div>
    <img className="event-logo" src="/assets/images/event-logo.png" />
  </div>
);

export default JumbotronEvent03;
