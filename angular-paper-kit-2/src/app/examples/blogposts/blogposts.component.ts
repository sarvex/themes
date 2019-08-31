import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogposts',
  templateUrl: './blogposts.component.html',
  styleUrls: ['./blogposts.component.scss']
})
export class BlogpostsComponent implements OnInit {
    data : Date = new Date();

  constructor() { }

  ngOnInit() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('blog-posts');
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
      navbar.classList.add('bg-danger');
  }
  ngOnDestroy(){
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('blog-posts');
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('bg-danger');
      navbar.classList.add('navbar-transparent');

  }

}
