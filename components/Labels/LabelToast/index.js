import React from "react";
import classNames from "classnames";
import "./style.scss";

const LabelToast = ({ children, className }) => (
  <div type="button" class={classNames("btn label-toast", className)} role="alert" aria-live="assertive" aria-atomic="true">
    {children}
    <span class="close-icon" data-dismiss="toast" aria-label="Close"></span>
  </div>
);

export default LabelToast;
