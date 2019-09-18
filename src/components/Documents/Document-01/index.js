import React from "react";
const Document01 = () => (
  <div className="col-sm-12 col-lg-8 document-card">
    <div class="card card-dropdown">
      <div class="card-body">
        <button
          type="button"
          className="btn dropdown-toggle collapsed"
          id="document"
          data-toggle="collapse"
          data-target="#documentNotes"
          aria-expanded="true"
          aria-controls="documentNotes"
        >
          <h4>Concept notes</h4>
        </button>

        <div
          id="documentNotes"
          className="dropwdown-collapse collapse"
          aria-labelledby="document"
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
