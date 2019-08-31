import { Component, OnInit } from '@angular/core';
import { TableData } from '../md/md-table/md-table.component';

declare var $: any;
declare interface Task {
  title: string;
  checked: boolean;
}
@Component({
    selector: 'app-widgets-cmp',
    templateUrl: 'widgets.component.html'
})

export class WidgetsComponent implements OnInit {
    public tableData: TableData;
    public tasks1: Task[];
    public tasks2: Task[];
    public tasks3: Task[];

    ngOnInit() {
        this.tableData = {
            headerRow: ['ID', 'Name', 'Salary', 'Country'],
            dataRows: [
                ['1', 'Dakota Rice', '$36,738', 'Niger'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South']
            ]
         };
         this.tasks1 = [
           { title: 'Sign contract for \'What are conference organizers afraid of?\'', checked: false },
           { title: 'Lines From Great Russian Literature? Or E-mails From My Boss?', checked: true },
           {
             title: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
             checked: true
           },
           { title: 'Create 4 Invisible User Experiences you Never Knew About', checked: false }
         ];
         this.tasks2 = [
            {
                title: `Flooded: One year later, assessing what was lost and
                 what was found when a ravaging rain swept through metro Detroit`,
                checked: true
            },

            { title: 'Sign contract for \'What are conference organizers afraid of?\'', checked: false },
         ];
        this.tasks3 = [

           { title: 'Lines From Great Russian Literature? Or E-mails From My Boss?', checked: false },
           {
             title: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
             checked: true
           },
           { title: 'Sign contract for \'What are conference organizers afraid of?\'', checked: false }
       ];

    }
}
