import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-page422',
  templateUrl: './page422.component.html',
  styleUrls: ['./page422.component.scss']
})
export class Page422Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy(){
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
  }
}
