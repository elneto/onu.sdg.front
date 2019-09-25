import React from "react";
import "./style.scss";

const JumbotronSpecialEvent = ({}) => (
  <div
    id="carosuelSpecialEvents"
    className="carousel slide specials-events"
    data-ride="carousel"
  >
    <ol className="carousel-indicators">
      <li
        data-target="#carosuelSpecialEvents"
        data-slide-to="0"
        className="active"
      ></li>
      <li data-target="#carosuelSpecialEvents" data-slide-to="1"></li>
      <li data-target="#carosuelSpecialEvents" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="jumbotron-event special-event">
          <div className="container">
            <div className="  col-xl-6 col-lg-8 col-md-8 col-sm-12">
              <h2 className="separator-bottom">SUSTAINABLE TRANSPORT, SUSTAINABLE DEVELOPMENT</h2>
              <h5>
                The global initiative to scale up action and impact on youth
                employment.
              </h5>
              <div className="place">
                <span>Conference Room 2, UNHQ</span>
                <span>New York</span>
              </div>
              <h5>Access for all</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="jumbotron-event special-event">
          <div className="container">
            <div className="  col-xl-6 col-lg-8 col-md-8 col-sm-12">
              <h2 className="separator-bottom">SUSTAINABLE TRANSPORT, SUSTAINABLE DEVELOPMENT</h2>
              <h5>
                The global initiative to scale up action and impact on youth
                employment.
              </h5>
              <div className="place">
                <span>Conference Room 2, UNHQ</span>
                <span>New York</span>
              </div>
              <h5>Access for all</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="jumbotron-event special-event">
          <div className="container">
            <div className="  col-xl-6 col-lg-8 col-md-8 col-sm-12">
              <h2 className="separator-bottom">SUSTAINABLE TRANSPORT, SUSTAINABLE DEVELOPMENT</h2>
              <h5>
                The global initiative to scale up action and impact on youth
                employment.
              </h5>
              <div className="place">
                <span>Conference Room 2, UNHQ</span>
                <span>New York</span>
              </div>
              <h5>Access for all</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carosuelSpecialEvents"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carosuelSpecialEvents"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
);

export default JumbotronSpecialEvent;
