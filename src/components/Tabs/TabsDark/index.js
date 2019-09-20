import React from "react";
import "./style.scss";

const TabsDark = ({ children }) => (
  <div className="tabs tabs-dark">
    <div className="nav-tabs-un">
      <div className="container">
        <ul
          className="nav nav-tabs flex-column flex-lg-row"
          id="myTab"
          role="tablist"
        >
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
          {children[0]}
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          {children[1]}
        </div>
        <div
          className="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          {children[2]}
        </div>
      </div>
    </div>
  </div>
);

export default TabsDark;
