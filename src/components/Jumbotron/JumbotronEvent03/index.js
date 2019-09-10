import React from "react";
import eventLogo from "../../../assets/images/event-logo.png";
import Link from "../../Common/Link";

const JumbotronEvent03 = ({ color }) => (
  <div className="jumbotron-event jumbotron-event-03 grey">
    <div className="container">
      <div className="jumbotron-content col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <a className="event-link" href="#" role="button">
          Events
        </a>
        <h1>2030 AGENDA PARTNERSHIPS ACCELERATOR</h1>
        <span className="date">11 April 2019</span>
        <div className="place">
          <span>UNHQ</span>
          <span>New York</span>
        </div>
        <Link>Visit the website</Link>
      </div>
    </div>
    <img className="event-logo" src={eventLogo} />
  </div>
);

export default JumbotronEvent03;
