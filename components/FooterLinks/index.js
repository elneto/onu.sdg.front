import React from "react";
import "./style.scss";

const FooterLinks = ({}) => (
  <div className="footer-links mb-5">
    <ul className="nav flex-column">
      <li className="nav-item">
        <button
          className="nav-link dropdown-toggle important collapsed"
          type="button"
          id="about"
          data-toggle="collapse"
          data-target="#aboutDSDG"
          aria-expanded="true"
          aria-controls="aboutDSDG"
        >
          <h5>About DSDG</h5>
        </button>
      </li>
      <div
        id="aboutDSDG"
        className="dropwdown-collapse collapse"
        aria-labelledby="about"
      >
        <li className="nav-item">
          <a className="nav-link" href="#">
            Division for Sustainable Development Goals
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Our topics
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact us
          </a>
        </li>
      </div>
    </ul>
    <ul className="nav flex-column">
      <li className="nav-item">
        <button
          className="nav-link important dropdown-toggle collapsed"
          type="button"
          id="quick"
          data-toggle="collapse"
          data-target="#quickLinks"
          aria-expanded="true"
          aria-controls="quickLinks"
        >
          <h5>Quick links</h5>
        </button>
      </li>
      <div
        id="quickLinks"
        className="dropwdown-collapse collapse"
        aria-labelledby="quick"
      >
        <li className="nav-item">
          <a className="nav-link" href="#">
            The Sustainable Development Goals
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            2030 Agenda
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            STI Forum 2019
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            High-Level Political Forum
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Technology Facilitation Mechanism
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Agenda 21
          </a>
        </li>
      </div>
    </ul>
    <ul className="nav flex-column">
      <li className="nav-item">
        <button
          className="nav-link dropdown-toggle important collapsed"
          type="button"
          id="online"
          data-toggle="collapse"
          data-target="#onlineDatabases"
          aria-expanded="true"
          aria-controls="onlineDatabases"
        >
          <h5>Online Databases</h5>
        </button>
      </li>
      <div
        id="onlineDatabases"
        className="dropwdown-collapse collapse"
        aria-labelledby="online"
      >
        <li className="nav-item">
          <a className="nav-link" href="#">
            SDG Good Practices
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            UN System SDGs Actions Database
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Voluntary National Reviews Database
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Inputs to HLPF
          </a>
        </li>
      </div>
    </ul>
    <ul className="nav flex-column">
      <li className="nav-item">
        <button
          className="nav-link dropdown-toggle important collapsed"
          type="button"
          id="partnerships"
          data-toggle="collapse"
          data-target="#partnershipsCommitments"
          aria-expanded="true"
          aria-controls="partnershipsCommitments"
        >
          <h5>Partnerships and V. Commitments</h5>
        </button>
      </li>
      <div
        id="partnershipsCommitments"
        className="dropwdown-collapse collapse"
        aria-labelledby="partnerships"
      >
        <li className="nav-item">
          <a className="nav-link" href="#">
            Partnerships Platform
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Ocean Voluntary Commitments Registry
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Partnerships for Small Island Developing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            States
          </a>
        </li>
      </div>
    </ul>
  </div>
);

export default FooterLinks;
