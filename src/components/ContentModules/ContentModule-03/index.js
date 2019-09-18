import React from "react";
import LabelSatus from "../../Labels/LabelStatus";
const ContentModule03 = () => (
  <div className="contmodule contmodule-02 col-sm-12 col-md-6 col-lg-4">
    <a href="#">
      <div
        className="contmodule-image"
        style={{
          background: 'url("/assets/content-image.jpg") center center no-repeat'
        }}
      >
        <div className="contmodule-type">
          <LabelSatus status="transparent">Conference</LabelSatus>
        </div>
      </div>

      <h5 className="contmodule-title">Major Group and other Stakeholder</h5>
      <p className="contmodule-text">10 - 14 January 2019</p>
    </a>
  </div>
);

export default ContentModule03;
