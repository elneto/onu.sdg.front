import React from "react";
import classNames from "classnames";
const Document01 = ({ className, id }) => (
  <div className={classNames("document-card", className)}>
    <div class="card card-dropdown">
      <div class="card-body">
        <button
          type="button"
          className="btn dropdown-toggle collapsed"
          id={`${id}-collapse`}
          data-toggle="collapse"
          data-target={`#${id}`}
          aria-expanded="true"
          aria-controls={id}
        >
          <h4>Concept notes</h4>
        </button>

        <div
          id={id}
          className="dropwdown-collapse collapse"
          aria-labelledby={`${id}-collapse`}
        >
          <div className="document-group">
            <div className="document-icon"></div>
            <a href="#" className="document-name">
              Concept notes
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Document01;
