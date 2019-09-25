import React from "react";
import classNames from "classnames";
const HeadingSubtitle = ({ text, className, children }) => (
  <div className={classNames("heading-subtitle", className)}>
    <div className="row">
      <div className="col-12 content">
        <h3>{text}</h3>
        {children}
      </div>
    </div>
  </div>
);

export default HeadingSubtitle;
