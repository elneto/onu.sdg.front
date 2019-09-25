import React from "react";
import "./style.scss";

const JumbotronAbout = ({}) => (
  <div
    className="jumbotron-event jumbotron-about"
    style={{
      background:
        "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)),url('/assets/news-02.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center"
    }}
  >
    <div className="container">
      <div className="  col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <h2 className="separator-bottom">ACTION NETWORKS FOR THE SDGS</h2>
        <h5>
          Driving actions towards achievement of the Sustainable Development
          Goals
        </h5>
        <div className="place">
          <span>Conference Room 2, UNHQ</span>
          <span>New York</span>
        </div>
      </div>
    </div>
  </div>
);

export default JumbotronAbout;
