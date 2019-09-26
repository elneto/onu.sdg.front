import React from "react";
import Notification from "../../Common/Notification";
import "./style.scss";

const HeaderBanner = ({}) => (
  <div className="container">
    <div className="row header-banner">
      <div className="col d-flex justify-content-center  mb-3 mb-sm-0">
        <img
          className="d-none d-lg-block logo"
          src="/assets/images/logo.svg"
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
          <div className="actions d-xs-flex  justify-content-md-end">
            <button className="button button-circle bell">
              <Notification>10</Notification>
            </button>
            <button className="button button-circle user" data-toggle="modal" data-target="#exampleModal"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderBanner;
