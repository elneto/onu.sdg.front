import React from "react";
import "./style.scss";
const MegaMenu = ({}) => (
  <ul className="mega-menu">
    <li className="mega-menu-item important">
      <a href="#">
        <img src="/assets/images/group-7.jpg" alt="" />
        <div className="important__content">
          <p className="title">Sustainable Development Goals</p>
          <p className="description">
            The 17 Sustainable Development Goals (SDGs) are an urgent call for
            action by all countries - developed and developing - in a global
            partnership.
          </p>
        </div>
      </a>
    </li>
    <li className="mega-menu-item">
      <a>Global Sustainable Development Report</a>
    </li>
    <li className="mega-menu-item">
      <a>Global Sustainable Development Report</a>
    </li>
    <li className="mega-menu-item">
      <a>Global Sustainable Development Report</a>
    </li>
    <li className="mega-menu-item">
      <a>Global Sustainable Development Report</a>
    </li>
  </ul>
);

export default MegaMenu;
