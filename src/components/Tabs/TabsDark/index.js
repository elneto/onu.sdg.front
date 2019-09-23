import React from "react";
import "./style.scss";
import classNames from 'classnames';

const TabsDark = ({ tabTexts, children }) => (
  <div className="tabs tabs-dark">
    <div className="nav-tabs-un">
      <div className="container">
        <ul
          className="nav nav-tabs flex-column flex-lg-row"
          id="myTab"
          role="tablist"
        >
          {tabTexts &&
            tabTexts.map((item, index) => (
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
      </div>
    </div>
    {children && (
      <div className="container">
        <div className="tab-content" id="myTabContent">
          {tabTexts.map((item, index) => (
            <div
              className="tab-pane fade "
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
      </div>
    )}
  </div>
);

export default TabsDark;
