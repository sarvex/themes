import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-areas',
  templateUrl: './description-areas.component.html',
  styleUrls: ['./description-areas.component.scss']
})
export class DescriptionAreasComponent implements OnInit {
    page = 4;
    page1 = 5;
    constructor() { }

    ngOnInit() {
    }

}
