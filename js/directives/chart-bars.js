import Vue from "vue";
import Chart from "chart.js";
Vue.directive("chart-bars", {
  bind: function(el, binding, vnode) {
    const myChartRef = el.getContext("2d");
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
              "#e5233d",
              "#dda73a",
              "#4ca146",
              "#13496b",
              "#ef402c",
              "#27bfe6",
              "#fbc412",
              "#a31c44",
              "#f26a2d",
              "#e01483",
              "#f89d2a",
              "#bf8d2c",
              "#407f46",
              "#1f97d4",
              "#59ba48",
              "#126a9f",
              "#13496b"
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
                  "#e5233d",
                  "#dda73a",
                  "#4ca146",
                  "#13496b",
                  "#ef402c",
                  "#27bfe6",
                  "#fbc412",
                  "#a31c44",
                  "#f26a2d",
                  "#e01483",
                  "#f89d2a",
                  "#bf8d2c",
                  "#407f46",
                  "#1f97d4",
                  "#59ba48",
                  "#126a9f",
                  "#13496b"
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
        }
      }
    });
  }
});
