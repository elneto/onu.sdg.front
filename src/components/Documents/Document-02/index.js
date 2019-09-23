import React from "react";
import classNames from "classnames";
const Document02 = ({className}) => (
  <div className={classNames("document-card", className)}>
    <div class="card card-dropdown">
      <div class="card-body">
        <div className="document-group">
          <div className="document-icon"></div>
          <a href="#" className="document-name">
            Concept notes
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Document02;
