import React from "react";
import classNames from "classnames";
import "./style.scss";

const Input = ({
  id,
  type,
  placeholder,
  label,
  className,
  required,
  subLabel,
  invalid
}) => (
  <div className={classNames("form-group", className)}>
    <label className="label" for={id}>
      {label} {required && <>*</>}
    </label>
    {subLabel && <label className="sub-label">{subLabel}</label>}
    <input
      type={type}
      className={classNames("form-control", { "is-invalid": invalid })}
      id={id}
      placeholder={placeholder}
      required={required}
    />
    <div className="invalid-feedback">This field is required</div>
  </div>
);

export default Input;
