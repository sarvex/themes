import { Component, OnInit } from '@angular/core';
import { TableData } from '../lbd/lbd-table/lbd-table.component';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import { Task } from '../lbd/lbd-task-list/lbd-task-list.component';

import * as Chartist from 'chartist';

declare var $:any;

@Component({
  selector: 'dashboard-cmp',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent {
    public tableData: TableData;
    public emailChartType: ChartType;
    public emailChartData: any;
    public emailChartLegendItems: LegendItem[];

    public hoursChartType: ChartType;
    public hoursChartData: any;
    public hoursChartOptions: any;
    public hoursChartResponsive: any[];
    public hoursChartLegendItems: LegendItem[];

    public activityChartType: ChartType;
    public activityChartData: any;
    public activityChartOptions: any;
    public activityChartResponsive: any[];
    public activityChartLegendItems: LegendItem[];

    public tasks: Task[];
    ngOnInit(){
        this.tableData = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['US', 'USA', '2.920	', '53.23%'],
                ['DE', 'Germany', '1.300', '20.43%'],
                ['AU', 'Australia', '760', '10.35%'],
                ['GB', 'United Kingdom	', '690', '7.87%'],
                ['RO', 'Romania', '600', '5.94%'],
                ['BR', 'Brasil', '550', '4.34%']
            ]
         };
         var mapData = {
              "AU": 760,
              "BR": 550,
              "CA": 120,
              "DE": 1300,
              "FR": 540,
              "GB": 690,
              "GE": 200,
              "IN": 200,
              "RO": 600,
              "RU": 300,
              "US": 2920,
          };
         $('#worldMap').vectorMap({
             map: 'world_mill_en',
             backgroundColor: "transparent",
             zoomOnScroll: false,
             regionStyle: {
                 initial: {
                     fill: '#e4e4e4',
                     "fill-opacity": 0.9,
                     stroke: 'none',
                     "stroke-width": 0,
                     "stroke-opacity": 0
                 }
             },

             series: {
                 regions: [{
                     values: mapData,
                     scale: ["#AAAAAA","#444444"],
                     normalizeFunction: 'polynomial'
                 }]
             },
         });

         this.emailChartType = ChartType.Pie;
         this.emailChartData = {
           labels: ['62%', '32%', '6%'],
           series: [62, 32, 6]
         };
         this.emailChartLegendItems = [
           { title: 'Open', imageClass: 'fa fa-circle text-info' },
           { title: 'Bounce', imageClass: 'fa fa-circle text-danger' },
           { title: 'Unsubscribe', imageClass: 'fa fa-circle text-warning' }
         ];

         this.hoursChartType = ChartType.Line;
         this.hoursChartData = {
           labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
           series: [
             [287, 385, 490, 492, 554, 586, 698, 695, 752, 788, 846, 944],
             [67, 152, 143, 240, 287, 335, 435, 437, 539, 542, 544, 647],
             [23, 113, 67, 108, 190, 239, 307, 308, 439, 410, 410, 509]
           ]
         };
         this.hoursChartOptions = {
           low: 0,
           high: 800,
           showArea: false,
           height: '245px',
           axisX: {
             showGrid: false,
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
           height: '245px'
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
         this.activityChartLegendItems = [
           { title: 'Tesla Model S', imageClass: 'fa fa-circle text-info' },
           { title: 'BMW 5 Series', imageClass: 'fa fa-circle text-danger' }
         ];

         this.tasks = [
           { title: 'Sign contract for \'What are conference organizers afraid of?\'', checked: false, check_number:'checkbox1' },
           { title: 'Lines From Great Russian Literature? Or E-mails From My Boss?', checked: true, check_number:'checkbox2'  },
           {
             title: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
             checked: true, check_number:'checkbox3'
           },
           { title: 'Create 4 Invisible User Experiences you Never Knew About', checked: false, check_number:'checkbox4'  },
           { title: 'Read \'Following makes Medium better\'', checked: false, check_number:'checkbox5'  },
           { title: 'Unfollow 5 enemies from twitter', checked: false, check_number:'checkbox6'  },
         ];

    }
}
