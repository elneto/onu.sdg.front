import Vue from "vue";
import Chart from "chart.js";
Vue.directive("chart-line", {
  bind: function(el, binding, vnode) {
    const myChartRef = el.getContext("2d");
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
                  "#13496b",
                  "#13496b",
                  "#13496b",
                  "#13496b",
                  "#13496b",
                  "#13496b",
                  "#13496b",
                  "#13496b",
                  "#13496b",
                  "#13496b",
                  "#13496b",
                  "#13496b",
                  "#13496b",
                  "#13496b",
                  "#13496b",
                  "#13496b",
                  "#13496b"
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
});
