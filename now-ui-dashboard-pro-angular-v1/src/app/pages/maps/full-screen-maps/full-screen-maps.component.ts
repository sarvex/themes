import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-full-screen-maps",
  templateUrl: "./full-screen-maps.component.html",
  styleUrls: ["./full-screen-maps.component.css"]
})
export class FullScreenMapsComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    var navbar = document.getElementsByClassName("navbar")[0];
    body.classList.add("full-screen-map");
    navbar.classList.remove("navbar-transparent");
    navbar.classList.add("bg-white");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    var navbar = document.getElementsByClassName("navbar")[0];
    body.classList.remove("full-screen-map");
    navbar.classList.remove("bg-white");
    navbar.classList.add("navbar-transparent");
  }
}
