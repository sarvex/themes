import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    data : Date = new Date();

    constructor() { }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('search-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('bg-danger');
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('search-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('bg-danger');
    }
}
