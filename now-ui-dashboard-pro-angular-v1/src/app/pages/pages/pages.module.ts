import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { LockComponent } from "./lock/lock.component";
import { RegisterComponent } from "./register/register.component";
import { PricingComponent } from "./pricing/pricing.component";
import { PagesRoutes } from "./pages.routing";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(PagesRoutes)],
  declarations: [
    LoginComponent,
    LockComponent,
    RegisterComponent,
    PricingComponent
  ]
})
export class PagesModule {}
