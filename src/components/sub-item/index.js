import React from "react"
import "./style.scss"
import goal07 from "../../assets/images/group-7.jpg"
const SubItem = ({ className }) => (
  <ul className="sub-item__content">
    <li className="important-item">
      <a href="#">
        <img src={goal07} alt="" />
        <div className="important-item__content">
          <p className="title">Sustainable Development Goals</p>
          <p className="description">
            The 17 Sustainable Development Goals (SDGs) are an urgent call for
            action by all countries - developed and developing - in a global
            partnership.
          </p>
        </div>
      </a>
    </li>
    <li>
      <a>Global Sustainable Development Report</a>
    </li>
    <li>
      <a>Global Sustainable Development Report</a>
    </li>
    <li>
      <a>Global Sustainable Development Report</a>
    </li>
    <li>
      <a>Global Sustainable Development Report</a>
    </li>
  </ul>
)

export default SubItem
