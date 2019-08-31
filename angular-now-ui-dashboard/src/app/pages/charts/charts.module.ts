import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { ChartsComponent } from "./charts.component";

import { ChartsRoutes } from "./charts.routing";

@NgModule({
  imports: [CommonModule, NgbModule, RouterModule.forChild(ChartsRoutes)],
  declarations: [ChartsComponent],
  exports: [ChartsComponent]
})
export class ChartsModule {}
