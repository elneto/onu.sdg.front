import React from "react";
import "./style.scss";


const FooterV2 = ({}) => (
  <footer className="footer-dark">
    <div className="container">
      <div className="footer-social">
        <img className="footer__logo" src="/assets/images/logo-footer-white.svg" alt="footer logo" />
        <div className="footer-actions">
          <div className="d-flex align-items-center">
            <span className="">Join the conversation:</span>
            <img className="" src='/assets/images/facebook-app-logo.svg' alt="facebook logo" />
          </div>
          <a
            href="#"
            class="btn btn-footer"
            role="button"
          >
            Donate
          </a>
        </div>
      </div>

      <div className="footer__links d-flex">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Copyright
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Fraud Alert
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Privacy Notice
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Site Index
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Terms of Use
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default FooterV2;
