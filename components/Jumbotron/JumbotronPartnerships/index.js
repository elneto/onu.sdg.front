import React from "react";
import "./style.scss";

const JumbotronPartnerships = () => (
  <div
    className="jumbotron-event jumbotron-partnerships"
    style={{
      background:
        "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)),url('/static/assets/news-02.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center"
    }}
  >
    <div className="container">
      <div className="  col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <a className="event-link" href="#" role="button">
          Partnerships
        </a>
        <h1 className="separator-bottom">SEA TURTLE RESTORATION AND PROTECTION</h1>
        <h5>#SDGACTION8035</h5>
        <img
          className="logo"
          src="/static/assets/images/logo-smart.svg"
          alt="smart logo"
        />
      </div>
    </div>
  </div>
);

export default JumbotronPartnerships;
