import React from "react";
import "./style.scss";

const Document03 = () => (
  <div className="col-sm-12 col-lg-8 document-03 document-card">
    <div class="card">
      <div class="card-body">
        <button
          type="button"
          className="btn dropdown-toggle collapsed"
          id="document2"
          data-toggle="collapse"
          data-target="#documentNotes2"
          aria-expanded="true"
          aria-controls="documentNotes2"
        >
          <div className="d-flex align-items-center">
            <div className="document-icon"></div>
            <span href="#" className="document-name">
              Synthesis of Voluntary National Reviews
            </span>
          </div>
        </button>

        <div
          id="documentNotes2"
          className="document-collapse collapse"
          aria-labelledby="document2"
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
