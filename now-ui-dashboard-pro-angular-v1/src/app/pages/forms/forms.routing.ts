import { Routes } from "@angular/router";

import { ExtendedFormsComponent } from "./extended-forms/extended-forms.component";
import { RegularFormsComponent } from "./regular-forms/regular-forms.component";
import { ValidationFormsComponent } from "./validation-forms/validation-forms.component";
import { WizardComponent } from "./wizard/wizard.component";

export const FormsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "regular",
        component: RegularFormsComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "extended",
        component: ExtendedFormsComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "validation",
        component: ValidationFormsComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "wizard",
        component: WizardComponent
      }
    ]
  }
];
