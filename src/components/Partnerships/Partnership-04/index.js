import React from "react";
import Link from "../../Common/Link";
import "./style.scss";

const Partnerships04 = ({}) => (
  <div className="card card-partnership partner-04 col-12 col-sm-4 col-lg-3">
    <a href="#">
      <div className="card-body d-flex align-items-center flex-column">
        <div className="partneship-logo"></div>
        <span className="partnership-label">Action network</span>
        <p className="partnership-text">SIDS Conference in 2014</p>
        <Link>See the action</Link>
      </div>
    </a>
  </div>
);

export default Partnerships04;
