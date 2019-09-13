import React from "react";
import Notification from "../../Common/Notification";
import "./style.scss";


const HeaderBanner = ({}) => (
  <div className="container">
    <div className="row header-banner">
      <div className="col d-flex justify-content-center  mb-3 mb-sm-0">
        <img
          className="d-none d-lg-block logo"
          src='/assets/images/logo.svg'
          alt="logo"
        />
        <img
          className="d-lg-none logo-mobile"
          src="/assets/images/logo_mobile.svg"
          alt="logo"
        />
      </div>
      <div className="col">
        <div className="actions d-xs-flex  justify-content-md-end">
          <button className="button button-circle grey">
            <img className="svg" src="/assets/images/bell.svg" alt="bell image" />
            <Notification>10</Notification>
          </button>
          <button className="button button-circle grey">
            <img className="svg" src="/assets/images/user.svg" alt="user image" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderBanner;
