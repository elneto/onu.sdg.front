import React from "react";
import HeadingInfo from "../HeadingInfo";
import "./style.scss";


const HeadingInfoBlock = ({ items }) => (
  <div className="info-block">
    {items.map(item => (
      <HeadingInfo number={item.number} text={item.text} />
    ))}
  </div>
);

export default HeadingInfoBlock;
