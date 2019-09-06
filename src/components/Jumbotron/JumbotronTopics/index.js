import React from "react";
import '../event.scss';
import "./style.scss";

const JumbotronTopics = ({ color }) => (
  <div className="jumbotron-event jumbotron-topics">
    <div className="container">
      <div className="jumbotron-content col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <a className="event-link" href="#" role="button">
          Topics
        </a>
        <h1>HEALTH AND POPULATION</h1>
        <h2>Ensure healthy lives and promote well-being for all at all ages</h2>
        <div className="d-flex">
          <button
            type="button"
            className="btn btn-outline-light left d-flex align-items-center"
          >
            Prev
          </button>
          <button
            type="button"
            className="btn btn-outline-light right d-flex align-items-center"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default JumbotronTopics;
