import React from "react";
import Link from "src/components/Common/Link";
import logoNetworks from "src/assets/images/logo-networks.png";
import "./style.scss";

const JumbotronActionNetworks = ({}) => (
  <div className="jumbotron-event jumbotron-networks">
    <div className="container">
      <div className="jumbotron-content col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <a className="event-link" href="#" role="button">
          Action Networks
        </a>
        <h1>DECENT JOBS FOR YOUTH</h1>
        <h2>
          The global initiative to scale up action and impact on youth
          employment.
        </h2>
        <Link>Register</Link>
      </div>
    </div>
    <img className="event-logo" src={logoNetworks} alt="smart logo" />
  </div>
);

export default JumbotronActionNetworks;
