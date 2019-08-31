import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ComponentsModule } from "../../components/components.module";

import { ButtonsComponent } from "./buttons/buttons.component";
import { PanelsComponent } from "./panels/panels.component";
import { GridSystemComponent } from "./grid-system/grid-system.component";
import { SweetAlertComponent } from "./sweet-alert/sweet-alert.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { IconsComponent } from "./icons/icons.component";
import { TypographyComponent } from "./typography/typography.component";

import { ComponentsRoutes } from "./components.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    NgbModule,
    ComponentsModule
  ],
  declarations: [
    ButtonsComponent,
    PanelsComponent,
    GridSystemComponent,
    SweetAlertComponent,
    NotificationsComponent,
    IconsComponent,
    TypographyComponent
  ],
  exports: [
    ButtonsComponent,
    PanelsComponent,
    GridSystemComponent,
    SweetAlertComponent,
    NotificationsComponent,
    IconsComponent,
    TypographyComponent
  ]
})
export class ComponentsPageModule {}
