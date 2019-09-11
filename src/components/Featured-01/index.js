import React from "react";
import Link from "src/components/Common/Link";
import "./style.scss";

const Featured01 = ({}) => (
  <div className="card card-news featured-01 col-xl-4 col-lg-4 col-md-12 col-sm-12">
    <a href="#">
      <div className="card-body">
        <h3 className="card-title">
        STI Forum 2019
        </h3>
        <Link>Read More</Link>
      </div>
    </a>
  </div>
);

export default Featured01;
