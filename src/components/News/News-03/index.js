import React from "react";
import LabelNumericGroup from "../../Labels/LabelNumericGroup";
import "./style.scss";

const News03 = ({ image }) => (
  <div class="card card-custom news-03 col-12 col-sm-6 col-lg-4">
    <a href="#">
      <img class="card-img-top" src={image} alt="new image" />
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

export default News03;
