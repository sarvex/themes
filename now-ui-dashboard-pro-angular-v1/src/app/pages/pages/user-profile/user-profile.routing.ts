import { Routes } from "@angular/router";

import { UserProfileComponent } from "./user-profile.component";

export const UserRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "pages/user",
        component: UserProfileComponent
      }
    ]
  }
];
