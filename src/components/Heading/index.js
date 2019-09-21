import React from "react";
import Button from "../Common/Button";
import classNames from "classnames";

class Heading extends React.Component {
  render() {
    const { text, textButton, size } = this.props;
    var textClass = classNames("heading-text", {
      "col-12 col-sm-6 col-lg-4": size === "small",
      "col-12 col-sm-8 col-lg-6": size === "big"
    });
    return (
      <div className="heading-block ">
        <div className="row">
          <div className={textClass}>
            <h2>{text}</h2>
          </div>
          {textButton && (
            <div className="heading-button col-12 col-sm-3">
              <Button color="primary">{textButton}</Button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Heading;
