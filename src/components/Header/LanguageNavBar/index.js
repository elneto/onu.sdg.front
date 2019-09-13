import React from "react";
import "./style.scss";

const LanguageNavBar = ({}) => (
  <nav className="navbar navbar-expand-md navbar-language fixed-top">
    <a className="navbar-brand" href="#">
      <img src='assets/images/home.svg' alt="" />
      Welcome to the United Nations
    </a>
    <button
      className="navbar-toggler blue"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarNav"
    >
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">
            عربي
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">
            中文
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            English
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Français
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">
            Русский
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Español
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default LanguageNavBar;
