import React from "react";
import Button from "../Button/index.js";
import "./style.scss";

const HomeBanner = ({ id, label }) => (
  <div className="home-banner position-relative overflow-hidden" >
    <div className="container h-100 d-flex align-items-center">
      <div className="col-lg-5 col-md-6 col-sm-12">
        <h1>MAKE THE SDGS A <span>REALITY</span></h1>
        <Button color="transparent">
            Discover The Goals
        </Button>
      </div>
    </div>
  </div>
);

export default HomeBanner;
