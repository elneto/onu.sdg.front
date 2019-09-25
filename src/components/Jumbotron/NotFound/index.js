import React from "react";
import Button from "../../Common/Button";
import './style.scss';
const NotFound = () => (
  <div
    className="notfound position-relative overflow-hidden"
    style={{
      backgroundImage: "url('/assets/home-banner.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center"
    }}
  >
    <div className="container h-100 d-flex align-items-center">
      <div className="col-lg-4 col-md-6 col-sm-12">
        <h1>
          <span>404</span>
        </h1>
        <h3>The page you are looking for can not be found.</h3>
        <Button className="btn-transparent arrow-left">Return to the previous page</Button>
      </div>
    </div>
  </div>
);

export default NotFound;
