import React, { Component } from "react";
import Goal from "../Goal";
import GoalMobile from "../GoalMobile";
import GlobalGoal from "../GlobalGoal";
import HeadingInfo from "../../HeadingInfo";
import "./style.scss";

export default class GoalsWrapper extends Component {
  constructor() {
    super();
    this.state = {
      width: null
    };
  }
  componentDidMount() {
    window.onresize = window.onload = () => {
      this.setState({ width: window.innerWidth });
    };
  }
  render() {
    const { goals } = this.props;
    const { width } = this.state;
    return (
      <div className="goals-wrapper" v-resize="">
        <div className="container">
          <div className="heading-block">
            <div className="row justify-content-between">
              <div className="col-12 col-sm-6 col-lg-4">
                <h2>THE 17 GOALS</h2>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-7 headinginfo-wrapper">
                <HeadingInfo number={340} text="Events" />
                <HeadingInfo number={860} text="Publications" />
                <HeadingInfo number={750} text="Partnerships" />
                <HeadingInfo number={120} text="Targets" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-full ">
          <div className="mb-5 row">
            {[...Array(goals).keys()].map(goal => (
              <>
                {width <= 576 ? (
                  <GoalMobile goal={goal + 1} />
                ) : (
                  <Goal goal={goal + 1} />
                )}
              </>
            ))}
            <GlobalGoal />
          </div>
        </div>
      </div>
    );
  }
}
