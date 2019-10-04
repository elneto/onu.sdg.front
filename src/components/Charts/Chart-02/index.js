import React, { Component } from "react";
import Chart from "chart.js";
import variables from "../../../scss/theme/variables.scss";

export default class Chart02 extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      fill: false,
      responsive: true,
      data: {
        labels: [
          "2001",
          "2002",
          "2003",
          "2004",
          "2005",
          "2006",
          "2007",
          "2008",
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017"
        ],
        datasets: [
          {
            label: "Goals",
            data: [
              20,
              30,
              40,
              50,
              60,
              70,
              80,
              90,
              100,
              110,
              120,
              130,
              140,
              150,
              160,
              170,
              180
            ],
            pointBorderColor: "#00adef",
            pointBackgroundColor: "#ffffff",
            borderColor: "#00adef",
            borderWidth: 1,
            pointRadius: 4,
            pointHitRadius: 4,
            backgroundColor: "rgba(0, 173, 239, 0.03)"
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              display: false
            }
          ],
          xAxes: [
            {
              gridLines: {
                color: "rgba(172, 227, 249, 0.65)"
              },
              ticks: {
                fontColor: [
                  variables.goal1,
                  variables.goal2,
                  variables.goal3,
                  variables.goal4,
                  variables.goal5,
                  variables.goal6,
                  variables.goal7,
                  variables.goal8,
                  variables.goal9,
                  variables.goal10,
                  variables.goal11,
                  variables.goal12,
                  variables.goal13,
                  variables.goal14,
                  variables.goal15,
                  variables.goal16,
                  variables.goal17
                ],
                fontSize: 14,
                mirror: true,
                fontColor: "#ace3f9",
                fontFamily: "Oswald"
              }
            }
          ]
        },
        maintainAspectRatio: false
      }
    });
  }
  render() {
    return (
      <div style={{height: '308px'}}>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}
