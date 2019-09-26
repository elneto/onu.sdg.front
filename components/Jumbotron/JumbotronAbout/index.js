import React from "react";
import "./style.scss";

const JumbotronAbout = ({}) => (
  <div
    className="jumbotron-event jumbotron-about"
    style={{
      background:
        "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)),url('/static/assets/news-02.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center"
    }}
  >
    <div className="container">
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <h2 className="separator-bottom">ABOUT THE EVENT</h2>
        <h5>Second Sustainable Development Transport Conference</h5>
        <div className="place">
          <span>Mon 5 - Wed 7 May 2020</span>
          <span>Beijing, China</span>
        </div>
      </div>
    </div>
  </div>
);

export default JumbotronAbout;
