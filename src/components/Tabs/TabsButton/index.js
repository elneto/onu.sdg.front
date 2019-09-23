import React from "react";
import classNames from "classnames";
import "./style.scss";

const TabsButton = ({ tabs, children, title }) => (
  <div className="tabs-button">
    <div className="col">
      <ul className="nav nav-pills d-flex w-100" id="pills-tab" role="tablist">
        {title && <h4 className="title">{title}</h4>}
        {tabs &&
          tabs.map((tab, index) => (
            <li className="nav-item">
              <a
                className={classNames("nav-link", {
                  active: index === 0
                })}
                id={`${tab.id}-tab`}
                data-toggle="pill"
                href={`#${tab.id}`}
                role="tab"
                aria-controls={tab.id}
                aria-selected="true"
              >
                {tab.label}
              </a>
            </li>
          ))}
      </ul>
    </div>
    {children && (
      <div className="tab-content" id="pills-tabContent">
        {tabs.map((tab, index) => (
          <div
            className={classNames("tab-pane fade", {
              "show active": index === 0
            })}
            id={`${tab.id}`}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
          >
            {children[index]}
          </div>
        ))}
      </div>
    )}
  </div>
);

export default TabsButton;
