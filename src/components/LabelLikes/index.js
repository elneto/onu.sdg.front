import React from "react";
import "./style.scss";

const LabelLikes = ({ children }) => (
  <button type="button" class="label-likes">
    <span class="like-icon"></span>
    {children}
  </button>
);

export default LabelLikes;
