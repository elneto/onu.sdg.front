import React from "react";
import "./style.scss";

const JumbotronTopics = ({ color }) => (
  <div className="jumbotron-event jumbotron-topics grey">
    <div className="container">
      <div className="  col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <a className="event-link" href="#" role="button">
          Topics
        </a>
        <h2 className="separator-bottom">HEALTH AND POPULATION</h2>
        <h5>Ensure healthy lives and promote well-being for all at all ages</h5>
        <div className="d-flex">
          <button
            type="button"
            className="btn btn-outline-dark left d-flex align-items-center"
          >
            Prev
          </button>
          <button
            type="button"
            className="btn btn-outline-dark right d-flex align-items-center"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default JumbotronTopics;
