import React from "react";
import LabelSatus from "../../Labels/LabelStatus";
const ContentModule02 = () => (
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
      <p className="contmodule-text">
        Major Groups and other Stakeholders (MGoS) were integral to the
        development and adoption of the 2030 Agenda for Sustainable Development.
      </p>
    </a>
  </div>
);

export default ContentModule02;
