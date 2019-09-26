import React from "react";
import classNames from "classnames";
import "./style.scss";

const Link = ({ children, className, href }) => (
  <a
    className={classNames("link", className)}
    href={href ? href : "#"}
    role="button"
  >
    {children}
  </a>
);

export default Link;
