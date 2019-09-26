import React from "react";
import "./style.scss";
import SocialIcon from '../Common/SocialIcon';


const Footer = ({}) => (
  <footer className="footer-dark">
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-sm-12  col-lg-4">
          <img className="footer__logo" src='/static/assets/images/logo-footer.svg' alt="footer logo" />
        </div>
        <div className="col-sm-12  col-lg-8">
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

            <div className="footer__links-social d-flex">
              <SocialIcon icon='/static/assets/images/facebook.svg' />
              <SocialIcon icon='/static/assets/images/twitter.svg' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
