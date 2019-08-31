import { Component, OnInit } from '@angular/core';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';

declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'charts-cmp',
    templateUrl: './charts.component.html'
})

export class ChartsComponent implements OnInit{
    public dataChartType: ChartType;
    public dataChartData: any;
    public dataChartOptions: any;

    public data2ChartType: ChartType;
    public data2ChartData: any;
    public data2ChartOptions: any;

    public emailChartType: ChartType;
    public emailChartData: any;
    public emailChartLegendItems: LegendItem[];

    public hoursChartType: ChartType;
    public hoursChartData: any;
    public hoursChartOptions: any;
    public hoursChartResponsive: any[];
    public hoursChartLegendItems: LegendItem[];

    public viewsChartType: ChartType;
    public viewsChartData: any;
    public viewsChartOptions: any;
    public viewsChartResponsive: any[];

    public activityChartType: ChartType;
    public activityChartData: any;
    public activityChartOptions: any;
    public activityChartResponsive: any[];

    ngOnInit(){
        this.emailChartType = ChartType.Pie;
        this.emailChartData = {
          labels: ['62%', '32%', '6%'],
          series: [62, 32, 6]
        };
        this.emailChartLegendItems = [
          { title: 'Apple', imageClass: 'fa fa-circle text-info' },
          { title: 'Samsung', imageClass: 'fa fa-circle text-danger' },
          { title: 'Windows Phone', imageClass: 'fa fa-circle text-warning' }
        ];

        this.dataChartType = ChartType.Line;
        this.dataChartData = {
            labels: ['6pm','9pm','11pm', '2am', '4am', '8am', '2pm', '5pm', '8pm', '11pm', '4am'],
            series: [
              [1, 6, 8, 7, 4, 7, 8, 12, 16, 17, 14, 13]
            ]
        };
        this.dataChartOptions = {
            showPoint: false,
            lineSmooth: true,
            height: "260px",
            axisX: {
                showGrid: false,
                showLabel: true
            },
            axisY: {
                offset: 40,
            },
            low: 0,
            high: 16
        };

        this.data2ChartType = ChartType.Line;
        this.data2ChartData = {
            labels: ['\'07','\'08','\'09', '\'10', '\'11', '\'12', '\'13', '\'14', '\'15'],
            series: [
                [22.20, 34.90, 42.28, 51.93, 62.21, 80.23, 62.21, 82.12, 102.50, 107.23]
            ]
        };
        this.data2ChartOptions = {
            lineSmooth: false,
            height: "260px",
            axisY: {
            offset: 40,
            labelInterpolationFnc: function(value) {
                return '$' + value;
              }

            },
            low: 10,
            high: 110,
            classNames: {
              point: 'ct-point ct-green',
              line: 'ct-line ct-green'
            }
        };

        this.hoursChartType = ChartType.Line;
        this.hoursChartData = {
            labels: ['\'06','\'07','\'08','\'09', '\'10', '\'11', '\'12', '\'13', '\'14','\'15'],
            series: [
              [287, 385, 490, 554, 586, 698, 695, 752, 788, 846, 944],
              [67, 152, 143,  287, 335, 435, 437, 539, 542, 544, 647],
              [23, 113, 67, 190, 239, 307, 308, 439, 410, 410, 509]
            ]
        };
        this.hoursChartOptions = {
          low: 0,
          high: 1000,
          showArea: false,
          height: '245px',
          axisX: {
            showGrid: true,
          },
          lineSmooth: Chartist.Interpolation.simple({
            divisor: 3
          }),
          showLine: true,
          showPoint: true,
        };
        this.hoursChartResponsive = [
          ['screen and (max-width: 640px)', {
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];
        this.hoursChartLegendItems = [
          { title: 'Open', imageClass: 'fa fa-circle text-info' },
          { title: 'Click', imageClass: 'fa fa-circle text-danger' },
          { title: 'Click Second Time', imageClass: 'fa fa-circle text-warning' }
        ];

        this.viewsChartType = ChartType.Bar;
        this.viewsChartData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };
        this.viewsChartOptions = {
            seriesBarDistance: 10,
            classNames: {
                bar: 'ct-bar ct-azure'
            },
            axisX: {
                showGrid: false
            }
        };
        this.viewsChartResponsive = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        this.activityChartType = ChartType.Bar;
        this.activityChartData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
              [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
            ]
        };
        this.activityChartOptions = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "245px"
        };
        this.activityChartResponsive = [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0];
                }
              }
            }]
        ];
    }
}
