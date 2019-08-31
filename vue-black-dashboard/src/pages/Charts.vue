<template>
  <div>
    <h2 class="text-center">Charts.js</h2>
    <p class="category text-center">
      Simple yet flexible JavaScript charting for designers &amp; developers.
      Made by our friends from
      <a target="_blank" rel="noopener" href="https://vue-chartjs.org/"
        >Vue Charts.js</a
      >. Please check
      <a
        target="_blank"
        rel="noopener"
        href="https://vue-chartjs.org/guide/#vue-single-file-components"
        >the full documentation</a
      >.
    </p>
    <div class="row mt-5">
      <div class="col-md-5 ml-auto">
        <card class="card-chart" no-footer-line>
          <template slot="header">
            <h5 class="card-category">Simple With Gradient</h5>
            <h3 class="card-title">
              <i class="tim-icons icon-chart-bar-32 text-primary "></i> 10,000
            </h3>
          </template>
          <div class="chart-area">
            <line-chart
              :chart-data="lineChart1.chartData"
              :gradient-colors="lineChart1.gradientColors"
              :gradient-stops="lineChart1.gradientStops"
              :extra-options="lineChart1.extraOptions"
              :height="200"
            >
            </line-chart>
          </div>
        </card>
      </div>

      <div class="col-md-5 mr-auto">
        <card class="card-chart">
          <template slot="header">
            <h5 class="card-category">With Numbers and Grid</h5>
            <h3 class="card-title">
              <i class="tim-icons icon-send text-info "></i> 750,000€
            </h3>
          </template>
          <div class="chart-area">
            <line-chart
              :labels="lineChart2.labels"
              :chart-data="lineChart2.chartData"
              :extra-options="lineChart2.extraOptions"
              :height="200"
            >
            </line-chart>
          </div>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-md-5 ml-auto">
        <card class="card-chart">
          <template slot="header">
            <h5 class="card-category">Gradient Bar Chart</h5>
            <h3 class="card-title">
              <i class="tim-icons icon-shape-star text-danger "></i> 1,000,000£
            </h3>
          </template>
          <div class="chart-area">
            <bar-chart
              :chart-data="barChart1.chartData"
              :extra-options="barChart1.extraOptions"
              :gradient-colors="barChart1.gradientColors"
              :gradient-stops="barChart1.gradientStops"
              :height="200"
            >
            </bar-chart>
          </div>
        </card>
      </div>

      <div class="col-md-5 mr-auto">
        <card class="card-chart" no-footer-line>
          <template slot="header">
            <h5 class="card-category">Multiple Bars Chart With Grid</h5>
            <h3 class="card-title">
              <i class="tim-icons icon-time-alarm text-warning "></i> 130,000$
            </h3>
          </template>
          <div class="chart-area">
            <bar-chart
              :chart-data="barChart2.chartData"
              :extra-options="barChart2.extraOptions"
              :height="200"
            >
            </bar-chart>
          </div>
        </card>
      </div>
    </div>

    <div class="row">
      <div class="col-md-5 ml-auto">
        <card class="card-chart card-chart-pie">
          <h5 slot="header" class="card-category">Simple Pie Chart</h5>

          <div class="row">
            <div class="col-6">
              <div class="chart-area">
                <pie-chart
                  :chart-data="pieChart1.chartData"
                  :extra-options="pieChart1.extraOptions"
                  :height="120"
                >
                </pie-chart>
              </div>
            </div>

            <div class="col-6">
              <h4 class="card-title">
                <i class="tim-icons  icon-trophy text-success "></i> 10.000$
              </h4>
              <p class="category">A total of $54000</p>
            </div>
          </div>
        </card>
      </div>

      <div class="col-md-5 mr-auto">
        <card class="card-chart card-chart-pie">
          <h5 slot="header" class="card-category">Multiple Pie Chart</h5>

          <div class="row">
            <div class="col-6">
              <div class="chart-area">
                <pie-chart
                  :chart-data="pieChart2.chartData"
                  :extra-options="pieChart2.extraOptions"
                  :height="120"
                >
                </pie-chart>
              </div>
            </div>

            <div class="col-6">
              <h4 class="card-title">
                <i class="tim-icons  icon-tag text-warning "></i> 130,000
              </h4>
              <p class="category">Feedback from 20.000 users</p>
            </div>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import LineChart from 'src/components/Charts/LineChart';
import BarChart from 'src/components/Charts/BarChart';
import PieChart from 'src/components/Charts/PieChart';
import config from '@/config';
import * as chartConfigs from '@/components/Charts/config';

export default {
  components: {
    LineChart,
    BarChart,
    PieChart
  },
  data() {
    return {
      lineChart1: {
        chartData: {
          labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
          datasets: [
            {
              label: 'Data',
              fill: true,
              borderColor: config.colors.primary,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.primary,
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: '#be55ed',
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [80, 100, 70, 80, 120, 80]
            }
          ]
        },
        extraOptions: chartConfigs.purpleChartOptions,
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0]
      },
      lineChart2: {
        chartData: {
          labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
          datasets: [
            {
              label: 'Data',
              fill: true,
              borderColor: config.colors.info,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.info,
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: '#2380f7',
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [80, 100, 70, 80, 120, 80]
            }
          ]
        },
        extraOptions: chartConfigs.lineChartOptionsBlue
      },
      barChart1: {
        chartData: {
          labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
          datasets: [
            {
              label: 'Data',
              fill: true,
              borderColor: config.colors.danger,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: [80, 100, 70, 80, 120, 80]
            }
          ]
        },
        extraOptions: chartConfigs.barChartOptionsGradient,
        gradientColors: config.colors.purpleGradient,
        gradientStops: [1, 0]
      },
      barChart2: {
        chartData: {
          labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
          datasets: [
            {
              label: 'Data',
              fill: true,
              backgroundColor: config.colors.orange,
              hoverBackgroundColor: config.colors.orange,
              borderColor: config.colors.orange,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: [80, 100, 70, 80, 120, 80]
            },
            {
              label: 'Data',
              fill: true,
              backgroundColor: config.colors.info,
              hoverBackgroundColor: config.colors.info,
              borderColor: config.colors.info,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: [60, 110, 90, 70, 90, 100]
            }
          ]
        },
        extraOptions: chartConfigs.barChartOptionsGradient
      },
      pieChart1: {
        chartData: {
          labels: [1, 2],
          datasets: [
            {
              label: 'Emails',
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: ['#00c09d', '#e2e2e2'],
              borderWidth: 0,
              data: [60, 40]
            }
          ]
        },
        extraOptions: chartConfigs.pieChartOptions
      },
      pieChart2: {
        chartData: {
          labels: [1, 2, 3],
          datasets: [
            {
              label: 'Emails',
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: ['#ff8779', '#2a84e9', '#e2e2e2'],
              borderWidth: 0,
              data: [60, 40, 20]
            }
          ]
        },
        extraOptions: chartConfigs.pieChartOptions
      }
    };
  }
};
</script>
<style></style>
