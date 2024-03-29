import React from "react";
import classNames from "classnames";
import "./style.scss";

const Document03 = ({ className, id }) => (
  <div className={classNames("document-03 document-card", className)}>
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
          <div className="d-flex align-items-center">
            <div className="document-icon"></div>
            <span href="#" className="document-name">
              Synthesis of Voluntary National Reviews
            </span>
          </div>
        </button>

        <div
          id={id}
          className="dropwdown-collapse collapse"
          aria-labelledby={`${id}-collapse`}
        >
          <div className="document-group">
            <a href="#" className="document-name">
              2019
            </a>
          </div>
          <div className="document-group">
            <a href="#" className="document-name">
              2017
            </a>
          </div>
          <div className="document-group">
            <a href="#" className="document-name">
              2016
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Document03;
