import React from "react";
import Link from "../../Common/Link";
import classNames from "classnames";
import "./style.scss";

const Partnerships04 = ({className}) => (
  <div className={classNames('card card-partnership partner-04', className)}>
    <a href="#">
      <div className="card-body d-flex align-items-center justify-content-center  flex-column">
        <div className="partneship-logo"></div>
        <span className="partnership-label">Action network</span>
        <p className="partnership-text">SIDS Conference in 2014</p>
        <Link>See the action</Link>
      </div>
    </a>
  </div>
);

export default Partnerships04;
