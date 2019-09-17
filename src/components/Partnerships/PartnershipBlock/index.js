import React from "react";
import "./style.scss";
import Partnerships04 from "../Partnership-04";
import Partnerships03 from "../Partnership-03";

const PartnershipBlock = ( ) => (
  <div className="container partnership-block">
    <div className="heading-subtitle row">
      <div className="col-sm-12">
        <h3>Partnerships & Commitments</h3>
      </div>
    </div>
    <div className="mb-5 row row-spacing no-gutters">
      {[...Array(5).keys()].map(goal => (
        <>
          <Partnerships03 />
          <Partnerships04 />
        </>
      ))}
    </div>
  </div>
);

export default PartnershipBlock;
