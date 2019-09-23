import React from "react";
import LabelNumericGroup from "../../Labels/LabelNumericGroup";
import LabelPoints from "../../Labels/LabelPoints";
import LabelStatus from "../../Labels/LabelStatus";

const Partnerships02 = ({}) => (
  <div className="card card-partnership partner-02 col-12 col-sm-6 col-lg-4">
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
          <LabelPoints status={"completed"} />
        </div>
        <div className="d-flex justify-content-end partnership-actions">
          <span>
            <span className="partnership-icon likes"></span>
            10
          </span>
          <span>
            <span className="partnership-icon comments"></span>
            10
          </span>
          <span>
            <span className="partnership-icon checks"></span>
            10
          </span>
        </div>
      </div>
    </a>
  </div>
);

export default Partnerships02;
