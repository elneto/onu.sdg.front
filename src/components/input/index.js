
import React from "react"
import "./style.scss"


const Input = ({image, children}) => (
    <div className="input__wrapper has-error">
        <input className="input input-text" />
        <label className="label label-error">This field is required</label>
    </div>
)

export default Input
