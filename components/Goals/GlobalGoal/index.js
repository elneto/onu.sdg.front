import React from "react";
import Link from "../../Common/Link";
import "./style.scss";

const GlobalGoal = ({}) => (
  <div className="card  goal-global col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
    <a href="#">
     
        <img
          src="/static/assets/goals/global-goals.png"
          className="goal-image"
          alt="goal image"
        />
        <Link>See all</Link>
      
    </a>
  </div>
);

export default GlobalGoal;
