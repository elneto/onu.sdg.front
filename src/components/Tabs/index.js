import React from "react";
import Button from "../Button";
import "./style.scss";

const Tabs = ({}) => (
  <div className="tabs">
    <div className="nav-tabs-un">
      <div className="container">
        <ul className="nav nav-tabs flex-column flex-lg-row" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Overview
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              TARGETS & INDICATORS
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="contact-tab"
              data-toggle="tab"
              href="#contact"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              PROGRESS & INFO
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="container">
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active "
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="d-flex justify-content-between align-items-cente">
            <h2>OVERVIEW</h2>
            <Button color="primary">More info</Button>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className="d-flex justify-content-between align-items-center">
            <h2>TARGETS & INDICATORS</h2>
            <Button color="primary">More info</Button>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div className="d-flex justify-content-between align-items-cente">
            <h2>PROGRESS & INFO</h2>
            <Button color="primary">More info</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Tabs;
