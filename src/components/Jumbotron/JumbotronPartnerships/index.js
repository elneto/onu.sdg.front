import React from "react";
import "./style.scss";

const JumbotronPartnerships = ({ color }) => (
  <div className="jumbotron-event jumbotron-partnerships">
    <div className="container">
      <div className="jumbotron-content col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <a className="event-link" href="#" role="button">
          Partnerships
        </a>
        <h1>SEA TURTLE RESTORATION AND PROTECTION</h1>
        <h2>#SDGACTION8035</h2>
        <img className="logo"  src='/assets/images/logo-smart.svg' alt="smart logo" />
      </div>
    </div>
  </div>
);

export default JumbotronPartnerships;
