import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { UserProfileComponent } from "./user-profile.component";
import { UserRoutes } from "./user-profile.routing";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(UserRoutes), FormsModule],
  declarations: [UserProfileComponent]
})
export class UserModule {}
