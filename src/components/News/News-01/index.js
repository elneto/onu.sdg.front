import React from "react";
import LabelNumeric from "../../Labels/LabelNumeric";
import Link from "../..//Common/Link";
import LabelNumericGroup from "../../Labels/LabelNumericGroup";
import "./style.scss";

const News01 = ({}) => (
  <div className="card card-news news-01">
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
        <Link>Read More</Link>
        <LabelNumericGroup>
          <LabelNumeric color={"goal-4"}>6</LabelNumeric>
          <LabelNumeric color={"goal-11"}>11</LabelNumeric>
          <LabelNumeric color={"goal-15"}>15</LabelNumeric>
        </LabelNumericGroup>
      </div>
    </a>
  </div>
);

export default News01;
