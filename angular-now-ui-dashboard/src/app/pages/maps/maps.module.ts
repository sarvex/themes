import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NguiMapModule } from "@ngui/map";
import { ComponentsModule } from "../../components/components.module";

import { GoogleMapsComponent } from "./google-maps/google-maps.component";
import { FullScreenMapsComponent } from "./full-screen-maps/full-screen-maps.component";
import { VectorMapComponent } from "./vector-map/vector-map.component";

import { MapsRoutes } from "./maps.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MapsRoutes),
    NguiMapModule.forRoot({
      apiUrl: "https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE"
    }),
    ComponentsModule
  ],
  declarations: [
    GoogleMapsComponent,
    FullScreenMapsComponent,
    VectorMapComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MapsModule {}
