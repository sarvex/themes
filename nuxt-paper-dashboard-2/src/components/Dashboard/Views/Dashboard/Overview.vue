<template>
  <div>
    <!--Stats cards-->
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-6" v-for="stats in statsCards">
        <stats-card :type="stats.type"
                    :icon="stats.icon"
                    :small-title="stats.title"
                    :title="stats.value">
          <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i>
            {{stats.footerText}}
          </div>
        </stats-card>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-sm-6">
        <chart-card :chart-data="activeUsersChart.data"
                    chart-id="activity-chart"
                    chart-title="TOTAL EARNINGS IN LAST TEN QUARTERS">
          <span slot="title">$34,657</span>
          <badge slot="title-label" type="success">+18%</badge>

          <template slot="footer-title">Financial Statistics</template>

          <p-button slot="footer-right" aria-label="add button" type="success" round icon size="sm">
            <i class="nc-icon nc-simple-add"></i>
          </p-button>
        </chart-card>
      </div>

      <div class="col-lg-4 col-sm-6">
        <chart-card :chart-data="emailsCampaignChart.data"
                    chart-id="emails-chart"
                    color="#ef8156" chart-title="TOTAL SUBSCRIPTIONS IN LAST 7 DAYS">
          <span slot="title">169</span>
          <badge slot="title-label" type="danger">-14%</badge>

          <template slot="footer-title">View all members</template>

          <p-button slot="footer-right" aria-label="view button" type="danger" round icon size="sm">
            <i class="nc-icon nc-button-play"></i>
          </p-button>
        </chart-card>
      </div>

      <div class="col-lg-4 col-sm-6">
        <chart-card :chart-data="activeCountriesChart.data"
                    chart-id="active-countries-chart"
                    color="#fbc658" chart-title="Active Countries">
          <span slot="title">8,960</span>
          <badge slot="title-label" type="warning">~51%</badge>

          <template slot="footer-title">View more details</template>

          <p-button slot="footer-right" aria-label="view more button" type="warning" round icon size="sm">
            <i class="nc-icon nc-alert-circle-i"></i>
          </p-button>
        </chart-card>
      </div>
    </div>

    <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Global Sales by Top Locations</h4>
              <p class="category">All products that were shipped</p>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-7">
                  <world-map></world-map>
                </div>
                <div class="col-md-5">
                  <div class="table-responsive">
                    <table class="table">
                      <tbody>
                      <tr>
                        <td>
                          <div class="flag">
                            <img src="static/img/flags/US.png" alt="US">
                          </div>
                        </td>
                        <td>USA</td>
                        <td class="text-right">
                          2.920
                        </td>
                        <td class="text-right">
                          53.23%
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="flag">
                            <img src="static/img/flags/DE.png" alt="DE">
                          </div>
                        </td>
                        <td>Germany</td>
                        <td class="text-right">
                          1.300
                        </td>
                        <td class="text-right">
                          20.43%
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="flag">
                            <img src="static/img/flags/AU.png" alt="AU">
                          </div>
                        </td>
                        <td>Australia</td>
                        <td class="text-right">
                          760
                        </td>
                        <td class="text-right">
                          10.35%
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="flag">
                            <img src="static/img/flags/GB.png" alt="GB">
                          </div>
                        </td>
                        <td>United Kingdom</td>
                        <td class="text-right">
                          690
                        </td>
                        <td class="text-right">
                          7.87%
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="flag">
                            <img src="static/img/flags/RO.png" alt="RO">
                          </div>
                        </td>
                        <td>Romania</td>
                        <td class="text-right">
                          600
                        </td>
                        <td class="text-right">
                          5.94%
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="flag">
                            <img src="static/img/flags/BR.png" alt="BR">
                          </div>
                        </td>
                        <td>Brasil</td>
                        <td class="text-right">
                          550
                        </td>
                        <td class="text-right">
                          4.34%
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <task-list></task-list>
      </div>
      <div class="col-md-6">
        <chart-card :chart-data="activityChart.data"
                    :chart-height="300"
                    chart-id="activity-bar-chart"
                    chart-type="Bar">
          <template slot="header">
            <h4 class="card-title">2018 Sales</h4>
            <p class="card-category">All products including Taxes</p>
          </template>
          <template slot="footer">
            <div class="legend">
              <i class="fa fa-circle text-info"></i> Tesla Model S
              <i class="fa fa-circle text-danger"></i> BMW 5 Series
            </div>
            <hr>
            <div class="stats">
              <i class="fa fa-check"></i> Data information certified
            </div>
          </template>
        </chart-card>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-3 col-sm-6">
        <circle-chart-card :percentage="70"
                           chart-id="email-statistics-chart"
                           title="Email Statistics"
                           description="Last Campaign Performance"
                           color="#4acccd">
          <template slot="footer">
            <div class="legend">
              <i class="fa fa-circle text-info"></i> Open
            </div>
            <hr>
            <div class="stats">
              <i class="fa fa-calendar"></i> Number of emails sent
            </div>
          </template>
        </circle-chart-card>
      </div>

      <div class="col-lg-3 col-sm-6">
        <circle-chart-card :percentage="34"
                           chart-id="new-visitors-chart"
                           title="New Visitators"
                           description="Out Of Total Number"
                           color="#fcc468">
          <template slot="footer">
            <div class="legend">
              <i class="fa fa-circle text-warning"></i> Visited
            </div>
            <hr>
            <div class="stats">
              <i class="fa fa-check"></i> Campaign sent 2 days ago
            </div>
          </template>
        </circle-chart-card>
      </div>

      <div class="col-lg-3 col-sm-6">
        <circle-chart-card :percentage="80"
                           title="Orders"
                           chart-id="orders-chart"
                           description="Total Number"
                           color="#f17e5d">
          <template slot="footer">
            <div class="legend">
              <i class="fa fa-circle text-danger"></i> Completed
            </div>
            <hr>
            <div class="stats">
              <i class="fa fa-clock-o"></i> Updated 3 minutes ago
            </div>
          </template>
        </circle-chart-card>
      </div>

      <div class="col-lg-3 col-sm-6">
        <circle-chart-card :percentage="11"
                           title="Subscriptions"
                           description="Our Users"
                           color="#66615b">
          <template slot="footer">
            <div class="legend">
              <i class="fa fa-circle text-secondary"></i> Ended
            </div>
            <hr>
            <div class="stats">
              <i class="fa fa-history"></i> Total users
            </div>
          </template>
        </circle-chart-card>
      </div>
    </div>

  </div>
</template>
<script>
  import CircleChartCard from 'src/components/UIComponents/Cards/CircleChartCard.vue'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard';
  import StatsCard from 'src/components/UIComponents/Cards/StatsCard';
  import {Badge} from 'src/components/UIComponents'
  import Loading from 'src/components/Dashboard/Layout/LoadingMainPanel.vue'
  import TaskList from './Widgets/TaskList'
  const WorldMap = () => ({
    component: import('./../Maps/WorldMap.vue'),
    loading: Loading,
    delay: 200
  })

  export default {
    components: {
      StatsCard,
      ChartCard,
      CircleChartCard,
      WorldMap,
      Badge,
      TaskList
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data () {
      return {
        statsCards: [
          {
            type: 'warning',
            icon: 'nc-icon nc-globe',
            title: 'Capacity',
            value: '105GB',
            footerText: 'Updated now',
            footerIcon: 'nc-icon nc-refresh-69'
          },
          {
            type: 'success',
            icon: 'nc-icon nc-money-coins',
            title: 'Revenue',
            value: '$1,345',
            footerText: 'Last day',
            footerIcon: 'nc-icon nc-calendar-60'
          },
          {
            type: 'danger',
            icon: 'nc-icon nc-vector',
            title: 'Errors',
            value: '23',
            footerText: 'In the last hour',
            footerIcon: 'nc-icon nc-bell-55'
          },
          {
            type: 'info',
            icon: 'nc-icon nc-favourite-28',
            title: 'Followers',
            value: '+45',
            footerText: 'Updated now',
            footerIcon: 'nc-icon nc-refresh-69'
          }
        ],
        activeUsersChart: {
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
            series: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610]
          }
        },
        emailsCampaignChart: {
          data: {
            labels: ["12pm", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
            series: [40, 500, 650, 700, 1200, 1250, 1300, 1900]
          }
        },
        activeCountriesChart: {
          data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
            series: [80, 78, 86, 96, 83, 85, 76, 75, 88, 90]
          }
        },
        activityChart: {
          data: {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            datasets: [
              {
                label: "Data",
                borderColor: '#fcc468',
                fill: true,
                backgroundColor: '#fcc468',
                hoverBorderColor: '#fcc468',
                borderWidth: 8,
                data: [100, 120, 80, 100, 90, 130, 110, 100, 80, 110, 130, 140, 130, 120, 130, 80, 100, 90, 120, 130],
              },
              {
                label: "Data",
                borderColor: '#4cbdd7',
                fill: true,
                backgroundColor: '#4cbdd7',
                hoverBorderColor: '#4cbdd7',
                borderWidth: 8,
                data: [80, 140, 50, 120, 50, 150, 60, 130, 50, 130, 150, 100, 110, 80, 140, 50, 140, 50, 110, 150],
              }
            ]
          }
        }

      }
    }
  }

</script>
<style>

</style>
