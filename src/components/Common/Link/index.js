import React from "react";
import classNames from "classnames";
import "./style.scss";

const Link = ({ children, className }) => (
  <a className={classNames("link", className)} href="#" role="button">
    {children}
  </a>
);

export default Link;
