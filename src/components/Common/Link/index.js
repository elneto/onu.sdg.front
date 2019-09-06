import React from "react";
import "./style.scss";
const Link = ({ children }) => (
  <a className="link" href="#" role="button">
    {children}
  </a>
);

export default Link;
