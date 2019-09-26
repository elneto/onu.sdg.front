import React from "react";
import classNames from "classnames";
import './style.scss';
const Dropdown = ({ className, id, children, title}) => (
  <div className={classNames("dropdown", className)}>
    <div class="card card-dropdown">
      <div class="card-body">
        <button
          type="button"
          className="btn dropdown-toggle collapsed pb-2"
          id={`${id}-collapse`}
          data-toggle="collapse"
          data-target={`#${id}`}
          aria-expanded="true"
          aria-controls={id}
        >
          <h5>{title}</h5>
        </button>

        <div
          id={id}
          className="dropwdown-collapse collapse"
          aria-labelledby={`${id}-collapse`}
        >
            {children}
        </div>
      </div>
    </div>
  </div>
);

export default Dropdown;
