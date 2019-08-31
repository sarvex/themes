<template>
  <div>
    <div class="header text-center">
      <h3 class="title">Chartist.js</h3>
      <p class="category">
        Handcrafted by our friends from
        <a target="_blank" href="https://gionkunz.github.io/chartist-js/"
          >Chartist.js</a
        >. Please check out their
        <a
          href="https://gionkunz.github.io/chartist-js/getting-started.html"
          target="_blank"
          >full documentation.</a
        >
      </p>
    </div>

    <div class="md-layout">
      <div class="md-layout-item md-size-33 md-small-size-100">
        <chart-card
          header-animation="false"
          :chart-data="roundedLineChart.data"
          :chart-options="roundedLineChart.options"
          chart-type="Line"
          chart-inside-header
          no-footer
          background-color="green"
        >
          <template slot="content">
            <h4 class="title">Rounded Line Chart</h4>
            <p class="category">
              Line Chart
            </p>
          </template>
        </chart-card>
      </div>
      <div class="md-layout-item md-size-33 md-small-size-100">
        <chart-card
          header-animation="false"
          :chart-data="straightLinesChart.data"
          :chart-options="straightLinesChart.options"
          chart-type="Line"
          chart-inside-header
          no-footer
          background-color="warning"
        >
          <template slot="content">
            <h4 class="title">Line Chart With Points</h4>
            <p class="category">
              Straight Lines Chart
            </p>
          </template>
        </chart-card>
      </div>
      <div class="md-layout-item md-size-33 md-small-size-100">
        <chart-card
          header-animation="false"
          :chart-data="simpleBarChart.data"
          :chart-options="simpleBarChart.options"
          :chart-responsive-options="simpleBarChart.responsiveOptions"
          chart-type="Bar"
          chart-inside-header
          no-footer
          background-color="blue"
        >
          <template slot="content">
            <h4 class="title">Simple Bar Chart</h4>
            <p class="category">
              Bar Chart
            </p>
          </template>
        </chart-card>
      </div>
      <div class="md-layout-item md-size-50 md-small-size-100">
        <chart-card
          header-animation="false"
          :chart-data="colouredLineChart.data"
          :chart-options="colouredLineChart.options"
          chart-type="Line"
          header-icon
          chart-inside-content
          no-footer
          background-color="blue"
        >
          <template slot="chartInsideHeader">
            <div class="card-icon">
              <md-icon>timeline</md-icon>
            </div>
            <h4 class="title">
              Coloured Line Chart
              <small> - Rounded</small>
            </h4>
          </template>
        </chart-card>
      </div>
      <div class="md-layout-item md-size-50 md-small-size-100">
        <chart-card
          header-animation="false"
          :chart-data="multipleBarsChart.data"
          :chart-options="multipleBarsChart.options"
          chart-type="Bar"
          header-icon
          chart-inside-content
          no-footer
          background-color="green"
        >
          <template slot="chartInsideHeader">
            <div class="card-icon">
              <md-icon>insert_chart</md-icon>
            </div>
            <h4 class="title">
              Multiple Bars Chart
              <small> - Bar Chart</small>
            </h4>
          </template>
        </chart-card>
      </div>
      <div class="md-layout-item md-size-50 md-small-size-100">
        <chart-card
          header-animation="false"
          :chart-data="colouredBarsChart.data"
          :chart-options="colouredBarsChart.options"
          chart-type="Line"
          header-icon
          chart-inside-content
          no-footer
          background-color="warning"
        >
          <template slot="chartInsideHeader">
            <div class="card-icon">
              <md-icon>timeline</md-icon>
            </div>
            <h4 class="title">
              Coloured Line Chart
              <small> - Rounded</small>
            </h4>
          </template>
        </chart-card>
      </div>
      <div class="md-layout-item md-size-50 md-small-size-100">
        <chart-card
          header-animation="false"
          :chart-data="pieChart.data"
          :chart-options="pieChart.options"
          chart-type="Pie"
          header-icon
          chart-inside-content
          background-color="green"
        >
          <template slot="chartInsideHeader">
            <div class="card-icon">
              <md-icon>pie_chart</md-icon>
            </div>
            <h4 class="title">
              Pie Chart
            </h4>
          </template>
          <template slot="footer">
            <div class="md-layout">
              <div class="md-layout-item md-size-100">
                <h6 class="category">Legend</h6>
              </div>
              <div class="md-layout-item">
                <i class="fa fa-circle text-info"></i> Apple
                <i class="fa fa-circle text-warning"></i> Samsung
                <i class="fa fa-circle text-danger"></i> Windows Phone
              </div>
            </div>
          </template>
        </chart-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ChartCard } from "@/components";
export default {
  components: {
    ChartCard
  },
  data() {
    return {
      roundedLineChart: {
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          series: [[12, 17, 7, 17, 23, 18, 38]]
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 10
          }),
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          showPoint: false
        }
      },
      straightLinesChart: {
        data: {
          labels: [
            "'07",
            "'08",
            "'09",
            "'10",
            "'11",
            "'12",
            "'13",
            "'14",
            "'15"
          ],
          series: [[10, 16, 8, 13, 20, 15, 20, 34, 30]]
        },

        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          classNames: {
            point: "ct-point ct-white",
            line: "ct-line ct-white"
          }
        }
      },
      simpleBarChart: {
        data: {
          labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
        },
        options: {
          seriesBarDistance: 10,
          axisX: {
            showGrid: false
          }
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      },
      colouredLineChart: {
        data: {
          labels: [
            "'06",
            "'07",
            "'08",
            "'09",
            "'10",
            "'11",
            "'12",
            "'13",
            "'14",
            "'15"
          ],
          series: [[287, 480, 290, 554, 690, 690, 500, 752, 650, 900, 944]]
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 10
          }),
          axisY: {
            showGrid: true,
            offset: 40
          },
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          showPoint: true,
          height: "300px"
        }
      },
      colouredBarsChart: {
        data: {
          labels: [
            "'06",
            "'07",
            "'08",
            "'09",
            "'10",
            "'11",
            "'12",
            "'13",
            "'14",
            "'15"
          ],
          series: [
            [287, 385, 490, 554, 586, 698, 695, 752, 788, 846, 944],
            [67, 152, 143, 287, 335, 435, 437, 539, 542, 544, 647],
            [23, 113, 67, 190, 239, 307, 308, 439, 410, 410, 509]
          ]
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 10
          }),
          axisY: {
            showGrid: true,
            offset: 40
          },
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          showPoint: true,
          height: "300px"
        }
      },
      multipleBarsChart: {
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Mai",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
            [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
          ]
        },
        options: {
          seriesBarDistance: 10,
          axisX: {
            showGrid: false
          },
          height: "300px"
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      },
      pieChart: {
        data: {
          labels: ["62%", "32%", "6%"],
          series: [62, 32, 6]
        },
        options: {
          height: "230px"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.text-center {
  text-align: center;
}
.category {
  margin: 0;
}

.md-card-actions .md-layout-item {
  padding: 0;
}
</style>
