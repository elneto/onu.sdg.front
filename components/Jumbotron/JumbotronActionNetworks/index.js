import React from "react";
import "./style.scss";

const JumbotronActionNetworks = ({}) => (
  <div
    className="jumbotron-action"
    style={{
      background:
        "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)),url('/static/assets/news-02.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center"
    }}
  >
    <div className="container">
      <div className="col-md-6 col-sm-12 col-lg-4 ">
        <h2 className="separator-bottom">ACTION NETWORKS FOR THE SDGS</h2>
        <h5>
          Driving actions towards achievement of the Sustainable Development
          Goals
        </h5>
      </div>
    </div>
  </div>
);

export default JumbotronActionNetworks;
