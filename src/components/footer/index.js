import React from "react";
import "./style.scss";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import logo from "../../assets/images/logo-footer.svg";

const Footer = ({}) => (
  <footer className="footer">
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-sm-12  col-lg-4">
          <img className="footer__logo" src={logo} alt="footer logo" />
        </div>
        <div className="col-sm-12  col-lg-8">
          <div className="footer__links d-flex">
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Copyright
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Fraud Alert
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Privacy Notice
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Site Index
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Terms of Use
                </a>
              </li>
            </ul>
            
            <div className="footer__links-social d-flex">
              <a href="#">
                <img src={facebook} alt="facebook logo" />
              </a>
              <a href="#">
                <img src={twitter} alt="facebook logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
