import React from "react";
import classNames from "classnames";
import "./style.scss";

const TextArea = ({ id, label, placeholder, subLabel, required, invalid , className}) => (
  <div className={classNames("form-group", className)}>
    <label className="label" for={id}>
      {label} {required && <>*</>}
    </label>
    {subLabel && <label className="sub-label">{subLabel}</label>}
    <textarea
      name="textarea"
      className={classNames("form-control", { "is-invalid": invalid })}
      placeholder={placeholder}
    ></textarea>
    <div className="invalid-feedback">This field is required</div>
  </div>
);

export default TextArea;
