import { Component, OnInit } from "@angular/core";
import {
  Location,
  LocationStrategy,
  PathLocationStrategy
} from "@angular/common";
import { ROUTES } from "../../components/sidebar/sidebar.component";
import { Router } from '@angular/router';

@Component({
  selector: "app-auth-layout",
  templateUrl: "./auth-layout.component.html",
  styleUrls: ["./auth-layout.component.css"]
})
export class AuthLayoutComponent implements OnInit {
  private listTitles: any[];
  public location: Location;
  public isCollapsed = false;

  constructor(location: Location, private router: Router) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.router.events.subscribe((event) => {
       this.isCollapsed = false;
       const navbar = document.getElementsByTagName('nav')[0];

       if (this.isCollapsed) {
         navbar.classList.remove('navbar-transparent');
         navbar.classList.add('bg-white');
       }else{
         navbar.classList.add('navbar-transparent');
         navbar.classList.remove('bg-white');
       }
   });
  }
  getTitle() {
    let titlee: any = this.location.prepareExternalUrl(this.location.path());
    for (let i = 0; i < this.listTitles.length; i++) {
      if (
        this.listTitles[i].type === "link" &&
        this.listTitles[i].path === titlee
      ) {
        return this.listTitles[i].title;
      } else if (this.listTitles[i].type === "sub") {
        for (let j = 0; j < this.listTitles[i].children.length; j++) {
          let subtitle =
            this.listTitles[i].path + "/" + this.listTitles[i].children[j].path;
          if (subtitle === titlee) {
            return this.listTitles[i].children[j].title;
          }
        }
      }
    }
    return "Now UI Dashboard PRO Angular";
  }
  collapse(){
    this.isCollapsed = !this.isCollapsed;
    const navbar = document.getElementsByTagName('nav')[0];
    if (this.isCollapsed) {
      navbar.classList.remove('navbar-transparent');
      navbar.classList.add('bg-white');
    }else{
      navbar.classList.add('navbar-transparent');
      navbar.classList.remove('bg-white');
    }

  }
}
