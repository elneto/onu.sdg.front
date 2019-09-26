import React from "react";
import LabelNumericGroup from "../../Labels/LabelNumericGroup";
import "./style.scss";

const News04 = ({ }) => (
  <div class="card card-custom news-04">
    <a href="#">
      <div class="card-body">
        <span className="card-date">5 jul</span>
        <h4 class="card-title">Card title</h4>
        <p class="card-text">
          Strong foundation for coherent implementation of climate action and
          sustainable development objectives across all levels and sectors.
        </p>
        <LabelNumericGroup goals={3} />
      </div>
    </a>
  </div>
);

export default News04;
