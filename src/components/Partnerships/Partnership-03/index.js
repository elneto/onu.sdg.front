import React from "react";
import LabelNumericGroup from "../../Labels/LabelNumericGroup";
import LabelPoints from "../../Labels/LabelPoints";
import LabelStatus from "../../Labels/LabelStatus";

const Partnerships03 = ({}) => (
  <div className="card card-partnership partner-03 col-sm-12 col-lg-9">
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

        <p className="partnership-text">
          El PLAN DE CHOQUE POR EL EMPLEO JÓVEN 2019-2021; approved by the
          Spanish Council of Ministers (December 7 2018), consists on hiring
          3.000 employment counselors in Spain.
        </p>

        <div className="d-flex justify-content-between align-items-end mb-2 mt-auto">
          <LabelNumericGroup goals={3} />
          <LabelPoints className={"completed"} />
        </div>
        <div className="partnership-firm">
          <span className="partnership-label">Partners</span>
          <span className="firm">
            Spain, Ministry of Labour, Migration and Social Security; National
            Service for Employment (SEPE)
          </span>
        </div>
      </div>
    </a>
  </div>
);

export default Partnerships03;
