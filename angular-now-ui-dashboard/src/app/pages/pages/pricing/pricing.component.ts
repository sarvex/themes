import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-pricing",
  templateUrl: "./pricing.component.html",
  styleUrls: ["./pricing.component.css"]
})
export class PricingComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    var $page = document.getElementsByClassName("full-page")[0];
    var image_src;
    var image_container = document.createElement("div");
    image_container.classList.add("full-page-background");
    image_container.style.backgroundImage = "url(assets/img/bg15.jpg)";
    $page.appendChild(image_container);
    $page.classList.add("pricing-page");

  }
  ngOnDestroy() {
    var $page = document.getElementsByClassName("full-page")[0];
    $page.classList.remove("pricing-page");
  }
}
