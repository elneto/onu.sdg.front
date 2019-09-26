import React from "react";
import "./style.scss";

const JumbotronEvent01 = ({ color }) => (
  <div
    className="jumbotron-event jumbotron-event-01"
    style={{
      background:
        "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)),url('/static/assets/news-02.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center"
    }}
  >
    <div className="container">
      <div className="  col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <a className="event-link" href="#" role="button">
          Events
        </a>
        <h2>STI FORUM 2019</h2>
        <span className="date">Mon 8 - Tue 9 Jul 2019</span>
        <h5>
          4th annual Multi-stakeholder Forum on Science, Technology and
          Innovation for the Sustainable Development Goals
        </h5>
        <div className="place">
          <span>Conference Room 2, UNHQ</span>
          <span>New York</span>
        </div>
        <div className="goals">
          <h3>Related</h3>
          <div className="goals-content">
            {[...Array(17).keys()].map(goal => (
              <img
                className="goal-logo"
                src={`/static/assets/goals/logos/goal-logo-${goal + 1}.jpg`}
                alt="goal logo"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default JumbotronEvent01;
