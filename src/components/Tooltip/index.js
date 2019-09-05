import React from "react";
import "./style.scss";

const ToolTip = ({ close }) => (
  <div className="alert alert-light alert-dismissible fade show" role="alert">
    By 2030, eradicate extreme poverty for all people everywhere, currently
    measured as people living on less than $1.25 a day
    {close && (
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    )}
  </div>
);

export default ToolTip;
