import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TagInputModule } from "ngx-chips";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { AngularMultiSelectModule } from "angular2-multiselect-dropdown";
import { ComponentsModule } from "../../components/components.module";
import { ArchwizardModule } from "angular-archwizard";

import { CommonModule } from "@angular/common";
import { RegularFormsComponent } from "./regular-forms/regular-forms.component";
import { ExtendedFormsComponent } from "./extended-forms/extended-forms.component";
import { ValidationFormsComponent } from "./validation-forms/validation-forms.component";
import { WizardComponent } from "./wizard/wizard.component";
import { FormsRoutes } from "./forms.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FormsRoutes),
    TagInputModule,
    AngularMultiSelectModule,
    ComponentsModule,
    ArchwizardModule,
    JwBootstrapSwitchNg2Module,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    RegularFormsComponent,
    ExtendedFormsComponent,
    ValidationFormsComponent,
    WizardComponent
  ]
})
export class Forms {}
