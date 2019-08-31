import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { CalendarComponent } from "./calendar.component";

import { CalendarRoutes } from "./calendar.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CalendarRoutes)
  ],
  declarations: [CalendarComponent],
  exports: [CalendarComponent]
})
export class CalendarModulee {}
