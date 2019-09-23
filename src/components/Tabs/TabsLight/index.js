import React from "react";
import classNames from 'classnames';
import "./style.scss";

const TabsLight = ({ tabs, children }) => (
  <div className="tabs tabs-light">
    <ul
      className="nav nav-tabs flex-column flex-lg-row"
      id="myTab"
      role="tablist"
    >
      {tabs &&
        tabs.map((item, index) => (
          <li className="nav-item ">
            <a
              className={classNames("nav-link", {
                active: index === 0
              })}
              id={`${item.id}-tab`}
              data-toggle="tab"
              href={`#${item.id}`}
              role="tab"
              aria-controls={item.id}
              aria-selected="true"
            >
              {item.label}
            </a>
          </li>
        ))}
    </ul>
    {children && (
      <div className="tab-content" id="myTabContent">
        {tabs.map((item, index) => (
          <div
            className="tab-pane fade"
            className={classNames("tab-pane fade", {
              "show active": index === 0
            })}
            id={item.id}
            role="tabpanel"
            aria-labelledby={`${item.id}-tab`}
          >
            {children[index]}
          </div>
        ))}
      </div>
    )}
  </div>
);

export default TabsLight;
