import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-areas',
  templateUrl: './comments-areas.component.html',
  styleUrls: ['./comments-areas.component.scss']
})
export class CommentsAreasComponent implements OnInit {
    page = 1;
    page1 = 1;
    constructor() { }

    ngOnInit() {
    }

}
