import { Routes } from "@angular/router";

import { FullScreenMapsComponent } from "./full-screen-maps/full-screen-maps.component";
import { GoogleMapsComponent } from "./google-maps/google-maps.component";
import { VectorMapComponent } from "./vector-map/vector-map.component";

export const MapsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "fullscreen",
        component: FullScreenMapsComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "google",
        component: GoogleMapsComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "vector",
        component: VectorMapComponent
      }
    ]
  }
];
