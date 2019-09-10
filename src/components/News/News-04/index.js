import React from "react";
import LabelNumericGroup from "../../Labels/LabelNumericGroup";
import LabelNumeric from "../../Labels/LabelNumeric";
import "./style.scss";

const News04 = ({ }) => (
  <div class="card card-news news-04">
    <a href="#">
      <div class="card-body">
        <span className="card-date">5 jul</span>
        <h4 class="card-title">Card title</h4>
        <p class="card-text">
          Strong foundation for coherent implementation of climate action and
          sustainable development objectives across all levels and sectors.
        </p>
        <LabelNumericGroup>
          <LabelNumeric color={"goal-6"}>6</LabelNumeric>
          <LabelNumeric color={"goal-11"}>11</LabelNumeric>
          <LabelNumeric color={"goal-15"}>15</LabelNumeric>
        </LabelNumericGroup>
      </div>
    </a>
  </div>
);

export default News04;
