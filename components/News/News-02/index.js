import React from "react";
import LabelNumericGroup from "../../Labels/LabelNumericGroup";
import "./style.scss";


const News02 = ({ image }) => (
  <div class="card card-custom news-02 col-xl-6 col-lg-6 col-md-6 col-sm-12">
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
        <LabelNumericGroup goals={10} />
      </div>
    </a>
  </div>
);

export default News02;
