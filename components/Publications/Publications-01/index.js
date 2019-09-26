import React from "react";
import Link from "../../Common/Link";
import "./style.scss";

const Publications01 = ({}) => (
  <div className="card card-custom publications-01 col-sm-6  col-lg-3">
    <a href="#">
      <div className="card-body">
        <h4 className="card-title">Partnering for Sustainable Development</h4>
        <p className="card-text">
          Guidelines for Multi-stakeholder Partnerships to implement the 2030
          Agenda in Asia and the Pacifico
        </p>
        <Link>Read the document</Link>
      </div>
    </a>
  </div>
);

export default Publications01;
