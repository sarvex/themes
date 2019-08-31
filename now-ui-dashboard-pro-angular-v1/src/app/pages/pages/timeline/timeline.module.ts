import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { TimelineComponent } from "./timeline.component";
import { TimelineRoutes } from "./timeline.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TimelineRoutes),
    NgbModule,
    FormsModule
  ],
  declarations: [TimelineComponent]
})
export class TimelineModule {}
