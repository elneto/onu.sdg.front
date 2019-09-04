import React from "react";
import Button from "../Button";
import "./style.scss";

const TabsLight = ({}) => (
  <div className="container">
    <div className="tabs tabs-light">
        <ul
          className="nav nav-tabs flex-column flex-lg-row"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              id="tab-light-1"
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
              id="tab-light-2"
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
              id="tab-light-3"
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
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active "
          id="home"
          role="tabpanel"
          aria-labelledby="tab-light-1"
        >
          lorem
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="tab-light-2"
        >
          lorem
        </div>
        <div
          className="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="tab-light-3"
        >
          lorem
        </div>
      </div>
    </div>
  </div>
);

export default TabsLight;
