import React from "react";
import Link from "src/components/Common/Link";

const JumbotronActionNetworksDetail = ({}) => (
  <div
    className="jumbotron-event"
    style={{
      background:
        "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)),url('/assets/news-02.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center"
    }}
  >
    <div className="container">
      <div className=" col-sm-12 col-md-6 col-lg-4 ">
        <a className="event-link" href="#" role="button">
          Action Networks
        </a>
        <h2 className="separator-bottom">DECENT JOBS FOR YOUTH</h2>
        <h5>
          The global initiative to scale up action and impact on youth
          employment.
        </h5>
        <Link>Register</Link>
      </div>
    </div>
    <img
      className="event-logo"
      src="/assets/images/logo-networks.png"
      alt="smart logo"
    />
  </div>
);

export default JumbotronActionNetworksDetail;
