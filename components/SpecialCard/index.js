import React from "react";
import "./style.scss";

const SpecialCard = ({ children }) => (
  <div class="card card-special card-custom news-03 col-12 col-sm-6 col-lg-4">
    <div className="card-body">
      <div className="card-header"></div>
      <p>
        When we lose a language, we lose millennia of knowledge about our
        planet, its climate and its natural world.
      </p>
      <p>
        This Friday is <a href="#">#IndigenousDay</a>, dedicated to protecting
        <a href="#">#IndigenousLanguages</a>:<a href="#">bit.ly/idwip2019</a>
        <a href="#"> #WeAreIndigenous</a>
      </p>
      <div className="card-media">{children}</div>
      <div className="card-footer">
        <div className="icons"></div>
        <span className="info">3 AUG</span>
      </div>
    </div>
  </div>
);

export default SpecialCard;
