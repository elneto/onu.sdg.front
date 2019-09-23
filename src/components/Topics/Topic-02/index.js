import React from "react";
import LabelNumericGroup from "../../Labels/LabelNumericGroup";
import "./style.scss";

const Topic02 = ({}) => (
  <div className="card card-custom topic-02 col-12 col-sm-6 col-lg-4">
    <a href="#">
      <img className="card-image" src="/assets/publications-01.jpg" />
      <div className="card-body">
        <h4 className="card-title">
          Food security and nutrition and sustainable agriculture
        </h4>
        <LabelNumericGroup goals={3} />
      </div>
    </a>
  </div>
);

export default Topic02;
