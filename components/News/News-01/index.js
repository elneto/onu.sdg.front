import React from "react";
import Link from "../../Common/Link";
import LabelNumericGroup from "../../Labels/LabelNumericGroup";
import "./style.scss";

const News01 = ({}) => (
  <div className="card card-custom news-01 col-12 col-sm-4">
    <a href="#">
      <div className="card-body">
        <span className="card-date">10 MAY</span>
        <h3 className="card-title">
          The SDG good practices have been launched!
        </h3>
        <p className="card-text">
          Three years into the implementation of the 2030 Agenda and the
          Sustainable Development Goals (SDGs), many Governments, UN entities,
          international and regional organizations, Major Groups and other
          Stakeholders.
        </p>
        <span className="card-link">Read More</span>
        <LabelNumericGroup goals={3} />
      </div>
    </a>
  </div>
);

export default News01;
