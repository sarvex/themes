import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-lock",
  templateUrl: "./lock.component.html",
  styleUrls: ["./lock.component.css"]
})
export class LockComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    var $page = document.getElementsByClassName("full-page")[0];
    var image_src;
    var image_container = document.createElement("div");
    image_container.classList.add("full-page-background");
    image_container.style.backgroundImage = "url(assets/img/bg13.jpg)";
    $page.appendChild(image_container);
    $page.classList.add("lock-page");
  }
  ngOnDestroy() {
    var $page = document.getElementsByClassName("full-page")[0];
    $page.classList.remove("lock-page");
  }
}
