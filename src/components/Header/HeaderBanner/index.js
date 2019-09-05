import React from "react";
import logo from "../../../assets/images/logo.svg";
import logoMobile from "../../../assets/images/logo_mobile.svg";

import userImage from "../../../assets/images/user.svg";
import bellImage from "../../../assets/images/bell.svg";
import Notification from "../../Common/Notification";
import "./style.scss";


const HeaderBanner = ({}) => (
  <div className="container">
    <div className="row header__banner">
      <div className="col d-flex justify-content-center  mb-3 mb-sm-0">
        <img
          className="d-none d-lg-block logo"
          src={logo}
          alt="logo"
        />
        <img
          className="d-lg-none logo-mobile"
          src={logoMobile}
          alt="logo"
        />
      </div>
      <div className="col">
        <div className="actions d-xs-flex  justify-content-md-end">
          <button className="button button-circle grey">
            <img className="svg" src={bellImage} alt="bell image" />
            <Notification>10</Notification>
          </button>
          <button className="button button-circle grey">
            <img className="svg" src={userImage} alt="user image" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderBanner;
