import React from "react";
import classNames from "classnames";
import "./style.scss";
import LabelPoints from "../Labels/LabelPoints";

const ProgressReport = ({ children, className }) => (
  <div className={classNames("card-progress", className)}>
    <LabelPoints className="completed" />
    <div className="card-body">{children}</div>
  </div>
);

export default ProgressReport;
