
import React from "react";
import MegaMenu from "../MegaMenu";
import "./style.scss";

const NavBarV2 = ({}) => (
  <nav className="navbar navbar-expand-lg navbar-full">
    <div className="container d-flex">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggle"
        aria-controls="navbarToggle"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarToggle"
      >
        <ul className="navbar-nav w-100">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="goals"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
            SDGs
            </a>
            <div className="dropdown-menu w-100" aria-labelledby="goals">
              <div className="container d-flex justify-content-center flex-lg-row flex-column">
                <MegaMenu />
                <MegaMenu />
                <MegaMenu />
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Member States
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="partnerships"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Partnerships
            </a>
            <div className="dropdown-menu w-100" aria-labelledby="partnerships">
              <div className="container">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Stakeholders
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="resources"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Resources
            </a>
            <div className="dropdown-menu w-100" aria-labelledby="resources">
              <div className="container">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Events
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="about"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              About
            </a>
            <div className="dropdown-menu w-100" aria-labelledby="about">
              <div className="container">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBarV2;

