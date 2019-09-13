import React from "react";
import Link from "src/components/Common/Link";
import "./style.scss";

const GlobalGoal = ({ }) => (
  <div className="card  goal-global col-6 col-sm-4 col-md-3 col-lg-2">
    <a href="#">
      <img src='/assets/goals/global-goals.png' className="goal-image" alt="goal image" />
      <Link>See all</Link>
    </a>
  </div>
);

export default GlobalGoal;
