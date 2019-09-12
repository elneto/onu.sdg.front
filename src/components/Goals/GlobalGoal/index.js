import React from "react";
import globalGoal from 'src/assets/goals/global-goals.png';
import Link from "src/components/Common/Link";
import "./style.scss";

const GlobalGoal = ({ }) => (
  <div className="card  goal-global col-6 col-sm-4 col-md-3 col-lg-2">
    <a href="#">
      <img src={globalGoal} className="goal-image" alt="goal image" />
      <Link>See all</Link>
    </a>
  </div>
);

export default GlobalGoal;
