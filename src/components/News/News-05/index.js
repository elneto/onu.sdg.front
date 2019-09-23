import React from "react";
import classNames from "classnames";
import "./style.scss";

const News05 = ({ image, className }) => (
  <div className={classNames("", className)}>
    <div className="card card-custom news-05">
      <a href="#" className="d-flex">
        <img
          class="card-img-top"
          src={image}
          alt="new image"
          width="82px"
          height="82px"
        />
        <div class="card-body">
          <span className="card-date">5 jul</span>
          <h4 class="card-title">Card title</h4>
        </div>
      </a>
    </div>
  </div>
);

export default News05;
