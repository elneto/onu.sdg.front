import React from "react";
import classNames from "classnames";
import "./style.scss";

const Button = ({ children, className }) => (
  <button className={classNames("btn btn-un", className)}>{children}</button>
);

export default Button;
