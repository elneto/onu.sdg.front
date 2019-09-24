import React from "react";
import classNames from "classnames";
import LabelNumericGroup from "../../Labels/LabelNumericGroup";
import LabelPoints from "../../Labels/LabelPoints";
import LabelStatus from "../../Labels/LabelStatus";

const Partnerships01 = ({ className }) => (
  <div className={classNames("card card-partnership partner-01", className)}>
    <a href="#">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="partnership-hashtag">#OceanAction32054</span>
          <LabelStatus status={"completed"}>Completed </LabelStatus>
        </div>
        <h4 className="partnership-title">
          Oceans Plastic Pollution - Save Marine Life and Human Health
        </h4>
        <span className="partnership-date">27 May 2019</span>

        <div className="d-flex justify-content-between align-items-end mb-2 mt-auto">
          <LabelNumericGroup goals={3} />
          <LabelPoints className={"completed"} />
        </div>
        <span className="partnership-iniciatives">1548 iniciatives</span>
      </div>
    </a>
  </div>
);

export default Partnerships01;
