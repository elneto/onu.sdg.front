import React from "react";
import classNames from "classnames";
import LabelNumericGroup from "../Labels/LabelNumericGroup";
import SocialIcon from "../Common/SocialIcon";
import "./style.scss";
const SharedRelated = ({ related }) => (
  <div
    className={classNames("related-card col-12 d-flex", {
      "justify-content-between": related,
      "justify-content-end": !related
    })}
  >
    {related && (
      <div className="related">
        <span className="date">17 JULY 2019</span>
        <LabelNumericGroup goals={7} />
      </div>
    )}

    <div className="share">
      <span className="label-shared">Share</span>
      <SocialIcon icon="/assets/images/facebook.svg" />
      <SocialIcon icon="/assets/images/twitter.svg" />
      <SocialIcon icon="/assets/images/linkedin.svg" />
    </div>
  </div>
);

export default SharedRelated;
