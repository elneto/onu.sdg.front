import React from "react";
import '../event.scss';
import "./style.scss";
import Link from "../../Common/Link";

const JumbotronEvent02 = ({ color }) => (
  <div className="jumbotron-event jumbotron-event-02">
    <div className="container">
      <div className="jumbotron-content col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <a className="event-link" href="#" role="button">
          Events
        </a>
        <h1>ECOSOC PARTNERSHIP FORUM</h1>
        <span className="date">11 April 2019</span>
        <div className="place">
          <span>UNHQ</span>
          <span>New York</span>
        </div>
        <Link>Visit the website</Link>
      </div>
    </div>
  </div>
);

export default JumbotronEvent02;
