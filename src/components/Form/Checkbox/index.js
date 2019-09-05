import React from "react";
import "./style.scss";

const Checkbox = ({id, label}) => (
  <div className="form-check">
    <input className="form-check-input" type="checkbox" id={id} />
    <label className="form-check-label" for={id}>
      {label}
    </label>
  </div>
);

export default Checkbox;
