import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import * as Rellax from 'rellax';


@Component({
    selector: 'app-presentation',
    templateUrl: './presentation.component.html',
    styleUrls: ['./presentation.component.scss']
})

export class PresentationComponent implements OnInit, OnDestroy, AfterViewInit {
    model = {
        left: true,
        middle: false,
        right: false
    };
    date : Date = new Date();

     constructor() { }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('presentation-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngAfterViewInit(){
      setTimeout(function(){
        if (window.innerWidth >= 991) {
            var rellax = new Rellax('.rellax', {
                center: true
            });
            var rellax1 = new Rellax('.rellax1', {
                center: true
            });
            var rellax5 = new Rellax('.rellax5', {
                center: true
            });
            var rellax6 = new Rellax('.rellax6', {
                center: true
            });
            var rellax7 = new Rellax('.rellax7', {
                center: true
            });
            var rellax8 = new Rellax('.rellax8', {
                center: true
            });
            var rellax9 = new Rellax('.rellax9', {
                center: true
            });
            var rellax10 = new Rellax('.rellax10', {
                center: true
            });
            var rellax11 = new Rellax('.rellax11', {
                center: true
            });
            var rellax12 = new Rellax('.rellax12', {
                center: true
            });
            var rellax13 = new Rellax('.rellax13', {
                center: true
            });
            var rellax14 = new Rellax('.rellax14', {
                center: true
            });

            var rellaxHeader = new Rellax('.rellax-header');
            var rellaxText = new Rellax('.rellax-text');
        }
      },200);

    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('presentation-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }
}
