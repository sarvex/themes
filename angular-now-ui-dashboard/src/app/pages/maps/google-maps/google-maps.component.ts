import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-google-maps",
  templateUrl: "./google-maps.component.html",
  styleUrls: ["./google-maps.component.css"]
})
export class GoogleMapsComponent implements OnInit {
  positions: any;
  constructor() {}
  onMapReady(map) {
    console.log("map", map);
    console.log("markers", map.markers); // to get all markers as an array
  }
  onIdle(event) {
    console.log("map", event.target);
  }
  onMarkerInit(marker) {
    console.log("marker", marker);
  }
  onMapClick(event) {
    this.positions.push(event.latLng);
    event.target.panTo(event.latLng);
  }
  ngOnInit() {}
}
