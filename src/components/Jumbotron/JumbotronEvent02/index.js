import React from "react";
import "./style.scss";
import Link from "../../Common/Link";

const JumbotronEvent02 = ({ color }) => (
  <div
    className="jumbotron-event jumbotron-event-02"
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
        <a className="event-link" href="#" role="button">
          Events
        </a>
        <h2>ECOSOC PARTNERSHIP FORUM</h2>
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
