import React from "react";
import Link from "src/components/Common/Link";
import "./style.scss";

const JumbotronStates = ({}) => (
  <div className="jumbotron-event jumbotron-states">
    <div className="container">
      <div className="jumbotron-content col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <a className="event-link" href="#" role="button">
          States
        </a>
        <h1>AUSTRALIA</h1>
        <h2>
        Part of the 2018 voluntary national review of the high-level political forum on sustainable development
        </h2>
        <Link>More information </Link>
      </div>
    </div>
  </div>
);

export default JumbotronStates;
