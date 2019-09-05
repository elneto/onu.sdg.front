import React from "react";
import './style.scss';

const Button = ({ color, children }) => (
 <button className={`btn btn-un btn-${color}`}>
     {children}
 </button>
)

export default Button;
