import React from "react";
import "./style.scss";
import LabelNumeric from "../LabelNumeric";

const LabelNumericGroup = ({children}) => (
  <div className="label-group">
      {children}
  </div>
);

export default LabelNumericGroup;
