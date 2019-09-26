import React from "react";
import Link from "../../Common/Link";
import "./style.scss";

const JumbotronStates = ({}) => (
  <div className="jumbotron-event jumbotron-states" style={{
    background:
      "linear-gradient(to left, rgba(242, 242, 242, 0), #f2f2f2),url('/static/assets/flag-banner.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "right"
  }}>
    <div className="container">
      <div className="  col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <a className="event-link" href="#" role="button">
          States
        </a>
        <h2 className="separator-bottom">AUSTRALIA</h2>
        <h5>
        Part of the 2018 voluntary national review of the high-level political forum on sustainable development
        </h5>
        <Link>More information </Link>
      </div>
    </div>
  </div>
);

export default JumbotronStates;
