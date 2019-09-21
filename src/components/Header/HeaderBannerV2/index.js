import React from "react";
import Notification from "../../Common/Notification";
import "./style.scss";

const HeaderBannerV2 = ({}) => (
  <div className="container">
    <div className="row header-banner header-form">
      <div className="col-lg-8 col-md-12 d-flex flex-column flex-md-row mb-3 mb-lg-0">
        <img
          className="d-none d-md-block logo"
          src="/assets/images/logo.svg"
          alt="logo"
        />
        <img
          className="d-md-none logo-mobile mb-3"
          src="/assets/images/logo_mobile.svg"
          alt="logo"
        />
        <h1 className="header-title">
          Department of Economic and Social Affairs
          <span>Sustainable Development</span>
        </h1>
      </div>
      <div className="col-lg-4 col-md-12">
        <div className="row align-items-center">
          <div className="col-8">
            <form className="d-flex mb-1">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn" type="submit">
                <img src="/assets/images/search.svg" />
              </button>
            </form>
          </div>
          <div className="col">
            <div className="actions d-xs-flex  justify-content-md-end">
              <button className="button button-circle bell">
                <Notification>10</Notification>
              </button>
              <button className="button button-circle user"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderBannerV2;
