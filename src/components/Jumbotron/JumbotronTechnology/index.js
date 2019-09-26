import React from "react";
import "./style.scss";

const JumbotronTechnology = () => (
  <div
    className="jumbotron-event jumbotron-technology"
    style={{
      background:
        "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)),url('/assets/technology.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center"
    }}
  >
    <div className="container">
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <h2 className="separator-bottom">TECHNOLOGY</h2>
        <h5>
          Facilitation mechanism.
          <br></br>
          <br></br>
          Harnessing Science, Technology and Innovation to achieve the
          Sustainable Development Goals
        </h5>
      </div>
    </div>
    <img
      className="event-logo"
      src="/assets/images/technology-logo.png"
      alt="technology logo"
    />
  </div>
);

export default JumbotronTechnology;
