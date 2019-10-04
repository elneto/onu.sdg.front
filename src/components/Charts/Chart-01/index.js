import React, { Component } from "react";
import Chart from "chart.js";
import variables from "../../../scss/theme/variables.scss";

export default class Chart01 extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");
    new Chart(myChartRef, {
      type: "bar",
      responsive: true,
      showTooltips: false,
      showInlineValues: true,
      data: {
        labels: [
          "Goal 1",
          "Goal 2",
          "Goal 3",
          "Goal 4",
          "Goal 5",
          "Goal 6",
          "Goal 7",
          "Goal 8",
          "Goal 9",
          "Goal 10",
          "Goal 11",
          "Goal 12",
          "Goal 13",
          "Goal 14",
          "Goal 15",
          "Goal 16",
          "Goal 17"
        ],
        datasets: [
          {
            label: "Goals",
            data: [
              633,
              67,
              91,
              524,
              939,
              703,
              24,
              343,
              343,
              343,
              600,
              45,
              56,
              343,
              343,
              234,
              99
            ],
            backgroundColor: [
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
            ]
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
                color: "#f2f2f2"
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
                callback: function(tickValue, index, ticks) {
                  return tickValue;
                },
                fontSize: 14,
                mirror: true,
                fontFamily: "Oswald-Bold"
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
