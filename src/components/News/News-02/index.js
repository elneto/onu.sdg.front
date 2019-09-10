import React from "react";
import LabelNumericGroup from "../../Labels/LabelNumericGroup";
import LabelNumeric from "../../Labels/LabelNumeric";
import "./style.scss";


const News02 = ({ image }) => (
  <div class="card card-news news-02 col-xl-6 col-lg-6 col-md-6 col-sm-12">
    <a>
      <img class="card-img-top" src={image} alt="new image" />
      <div class="card-body">
        <span className="card-date">10 MAY</span>
        <h3 class="card-title">Card title</h3>
        <p class="card-text">
          On behalf of the Department of Economic and Social Affairs, is my
          great pleasure to address this year’s ECOSOC Partnership Forum under
          the theme, “Partnerships driving inclusive implementation of the
          SDGs”.
        </p>
        <LabelNumericGroup>
          <LabelNumeric color={"goal-1"}>6</LabelNumeric>
          <LabelNumeric color={"goal-3"}>3</LabelNumeric>
          <LabelNumeric color={"goal-4"}>4</LabelNumeric>
          <LabelNumeric color={"goal-6"}>6</LabelNumeric>
          <LabelNumeric color={"goal-8"}>8</LabelNumeric>
          <LabelNumeric color={"goal-10"}>10</LabelNumeric>
          <LabelNumeric color={"goal-11"}>10</LabelNumeric>
          <LabelNumeric color={"goal-15"}>10</LabelNumeric>
          <LabelNumeric color={"goal-16"}>16</LabelNumeric>
        </LabelNumericGroup>
      </div>
    </a>
  </div>
);

export default News02;
