import React from "react";
import "./style.scss";

const State = ({}) => (
  <div className="card state col-12 col-sm-6 col-md-6 col-lg-3">
    <a href="#">
      <div className="card-body">
        <div
          className="state-image"
          style={{
            backgroundImage: 'url("/static/assets/flag.jpg")'
          }}
        ></div>
        <h5 className="state-title">Australia</h5>
        <p className="state-text">HLPF 2018</p>
      </div>
    </a>
  </div>
);

export default State;
