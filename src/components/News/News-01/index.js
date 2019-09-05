import React from "react";
import "./style.scss";
import LabelNumeric from "../../Labels/LabelNumeric";
import Link from "../..//Common/Link";
import LabelNumericGroup from "../../Labels/LabelNumericGroup";

const News01 = ({}) => (
  <div className="card news-01">
    <a href="#">
      <div className="card-body">
        <span className="date">10 MAY</span>
        <h3>The SDG good practices have been launched!</h3>
        <p>
          Three years into the implementation of the 2030 Agenda and the
          Sustainable Development Goals (SDGs), many Governments, UN entities,
          international and regional organizations, Major Groups and other
          Stakeholders.
        </p>
        <Link>Read More</Link>
        <div className="related">
          <span className="related-text">Related Goals</span>
          <LabelNumericGroup>
            <LabelNumeric color={"goal-4"}>6</LabelNumeric>
            <LabelNumeric color={"goal-11"}>11</LabelNumeric>
            <LabelNumeric color={"goal-15"}>15</LabelNumeric>
          </LabelNumericGroup>
          <div className="related-content"></div>
        </div>
      </div>
    </a>
  </div>
);

export default News01;
