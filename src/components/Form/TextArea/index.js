import React from "react";
import "./style.scss";

const TextArea = ({ id, label, placeholder, subLabel }) => (
  <div className="form-group">
    <label  className="label" for={id}>{label}</label>
    {subLabel && <label className="sub-label">{subLabel}</label>}
    <textarea name="textarea" className="form-control" placeholder={placeholder}></textarea>
  </div>
);

export default TextArea;
