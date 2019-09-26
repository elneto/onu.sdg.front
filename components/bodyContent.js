import React from "react";
import classNames from "classnames";
const BodyContent = ({ children, className }) => (
  <div className="row">
    <div className={classNames("col-12", className)}>{children}</div>
  </div>
);

export default BodyContent;
