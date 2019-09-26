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
  subLabel
}) => (
  <div className={classNames("form-group", className)}>
    <label className="label" for={id}>
      {label}
    </label>
    {subLabel && <label className="sub-label">{subLabel}</label>}
    <input
      type={type}
      class="form-control"
      id={id}
      placeholder={placeholder}
      required={required}
    />
  </div>
);

export default Input;
