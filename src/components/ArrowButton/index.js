import React from "react";
import './style.scss';

const ArrowButton = ({position, children }) => (
    <button type="button" class={`btn btn-outline-light ${position}`}>{children}</button>
)

export default ArrowButton;
