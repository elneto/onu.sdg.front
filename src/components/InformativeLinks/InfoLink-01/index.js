import React from "react";
const InfoLink01 = () => (
  <div className="col-sm-12 col-lg-8 card-dropdown infolink">
    <div class="card card-dropdown">
      <div class="card-body">
        <button
          type="button"
          className="btn dropdown-toggle collapsed"
          id="infolink"
          data-toggle="collapse"
          data-target="#infolink"
          aria-expanded="true"
          aria-controls="infolink"
        >
          <h4>Focal point information (SIDS)</h4>
        </button>

        <div
          id="infolink"
          className="dropwdown-collapse collapse"
          aria-labelledby="infolink"
        >
          <div className="infolink-group">
            <p>Iosefa Maiava</p>
            <p>Head</p>
            <p>ESCAP Pacific Office</p>
            <p>Suva, Fiji</p>
            <p>+679 3319 669</p>
            <p>maiavai@un.org</p>
          </div>
          <div className="infolink-group">
            <p>Tim Westbury	</p>
            <p>Economic Affairs Officer</p>
            <p>ESCAP Pacific Office	</p>
            <p>+Suva, Fiji</p>
            <p>+679 3237700	</p>
            <p>westbury@un.org </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InfoLink01;
