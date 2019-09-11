import React from "react";
import image from "src/assets/featured-02.jpg";
import "./style.scss";

const Featured02 = ({}) => (
  <div className="card card-news featured-02 col-xl-4 col-lg-4 col-md-4 col-sm-12">
    <a href="#">
      <div className="card-body">
        <img className="card-image" src={image} alt="featured image" />
        <h4 className="card-title">SIDS Partnership Framework </h4>
        <p class="card-text">
          SIDS Partnership Framework is designed to monitor progress of
          existing, and stimulate the launch of new, genuine and durable
          partnerships for the sustainable development of SIDS.
        </p>
      </div>
    </a>
  </div>
);

export default Featured02;
