import React from "react";
import Button from "../../Common/Button";
import "./style.scss";

const JumbotronHome = () => (
  <div
    className="home-banner position-relative overflow-hidden"
    style={{
      backgroundImage: "url('/static/assets/home-banner.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center"
    }}
  >
    <div className="container h-100 d-flex align-items-center">
      <div className="col-lg-5 col-md-6 col-sm-12">
        <h1>
          MAKE THE SDGS A <span>REALITY</span>
        </h1>
        <Button className="btn-transparent arrow-down">Discover The Goals</Button>
      </div>
    </div>
  </div>
);

export default JumbotronHome;
