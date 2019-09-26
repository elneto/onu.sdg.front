import React from "react";
import classNames from "classnames";
import "./style.scss";

const Publications02 = ({ className }) => (
  <div className={classNames("card publications-02", className)}>
    <a href="#">
      <div className="card-body">
        <img className="card-image" src="/static/assets/publications-01.jpg" />
        <p className="card-text">
          Guidelines for Multi-stakeholder Partnerships to implement the 2030
          Agenda in Asia and the Pacifico
        </p>
      </div>
    </a>
  </div>
);

export default Publications02;
