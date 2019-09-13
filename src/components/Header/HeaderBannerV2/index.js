import React from "react";
import Notification from "../../Common/Notification";
import "./style.scss";

const HeaderBannerV2 = ({}) => (
  <div className="container">
    <div className="row header-banner header-form">
      <div className="col-lg-8 col-md-12 d-flex  mb-3 mb-lg-0">
        <img className="d-none d-lg-block logo" src='/assets/images/logo.svg' alt="logo" />
        <img className="d-lg-none logo-mobile" src="/assets/images/logo_mobile.svg" alt="logo" />
      </div>
      <div className="col-lg-4 col-md-12">
        <div className="row">
          <div className="col-8">
            <form className="d-flex mb-1">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="col">
            <div className="actions d-xs-flex  justify-content-md-end">
              <button className="button button-circle grey">
                <img className="svg" src='/assets/images/bell.svg' alt="bell image" />
                <Notification>10</Notification>
              </button>
              <button className="button button-circle grey">
                <img className="svg" src='/assets/images/user.svg' alt="user image" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderBannerV2;
