import React from "react";
import "./style.scss";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import logo from "../../assets/images/logo-footer.svg";

const Footer = ({}) => (
  <footer className="footer">
    <img className="footer__logo" src={logo} alt="footer logo" />
    <div className="footer__links">
      <ul>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Copyright</a>
        </li>
        <li>
          <a href="#">Fraud Alert</a>
        </li>
        <li>
          <a href="#">Privacy Notice</a>
        </li>
        <li>
          <a href="#">Site Index</a>
        </li>
        <li>
          <a href="#">Terms of Use</a>
        </li>
      </ul>
      <div className="footer__links-social">
        <a href="#">
          <img src={facebook} alt="facebook logo" />
        </a>
        <a href="#">
          <img src={twitter} alt="facebook logo" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
