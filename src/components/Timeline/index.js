import React, { Component } from "react";
import $ from "jquery";
import "./style.scss";

export default class Timeline extends Component {
  componentDidMount() {
    $('[data-toggle="popover"]').popover();
  }

  render() {
    return (
      <div className="timeline-block">
        <div className="timeline">
          <div className="timeline-group">
            <div className="timeline-label">
              <a
                tabindex="0"
                id="poplink"
                class="timeline-link"
                data-trigger="focus"
                data-placement="bottom"
                data-toggle="popover"
                title="Global polio eradication initiative"
                data-content="The Global Polio Eradication Initiative began in 1988. At that time, polio was paralyzing more than 1000 children on a daily basis at global level. 
                Thanks to the cooperation of more than 200 countries and 20 million volunteers, backed by an international investment of more than US$ 9 billion, more than 2.5 billion children have been immunized against polio since. "
              >
                <span>WHO´S Constitution</span>
              </a>
            </div>

            <div className="timeline-point"></div>
          </div>
          <span className="timeline-date">1948</span>
          <div className="timeline-group">
            <div className="timeline-label">
              <span>Global polio eradication initiative</span>
            </div>
            <div className="timeline-point"></div>
          </div>
          <span className="timeline-date">1988</span>
          <div className="timeline-group">
            <div className="timeline-label">
              <a
                tabindex="0"
                id="poplink"
                data-trigger="focus"
                class="timeline-link"
                data-placement="bottom"
                data-toggle="popover"
                title="Global polio eradication initiative"
                data-content="The Global Polio Eradication Initiative began in 1988. At that time, polio was paralyzing more than 1000 children on a daily basis at global level. 
                Thanks to the cooperation of more than 200 countries and 20 million volunteers, backed by an international investment of more than US$ 9 billion, more than 2.5 billion children have been immunized against polio since. "
              >
                <span>Agenda 21 (Chapter 6)</span>
              </a>
            </div>
            <div className="timeline-point"></div>
          </div>
          <span className="timeline-date">1992</span>
          <div className="timeline-group">
            <div className="timeline-label">
              <span>Millenium declaration - Millenium Development Goal 6</span>
            </div>
            <div className="timeline-point"></div>
          </div>
          <span className="timeline-date">2000</span>
        </div>

        <div className="timeline">
          <span className="timeline-date">2000</span>
          <div className="timeline-group">
            <div className="timeline-label">
              <span>
                Decade to roll back malaria in developing countries, partyculary
                in Africa
              </span>
            </div>
            <div className="timeline-point"></div>
          </div>
          <span className="timeline-date">2001</span>
          <div className="timeline-group">
            <div className="timeline-label">
              <span>JPOI (Chapter)</span>
            </div>
            <div className="timeline-point"></div>
          </div>
          <span className="timeline-date">2002</span>
          <div className="timeline-group">
            <div className="timeline-label">
              <span>Every woman, every child</span>
            </div>
            <div className="timeline-point"></div>
          </div>
          <span className="timeline-date">2010</span>
          <div className="timeline-group">
            <div className="timeline-label">
              <span>2030 Agenda: Sustainable development Goal 3</span>
            </div>
            <div className="timeline-point"></div>
          </div>
          <span className="timeline-date">2015</span>
        </div>
      </div>
    );
  }
}
