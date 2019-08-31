import { Routes } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

export const AppRoutes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: "./pages/dashboard/dashboard.module#DashboardModule"
      },
      {
        path: "components",
        loadChildren:
          "./pages/components/components.module#ComponentsPageModule"
      },
      {
        path: "forms",
        loadChildren: "./pages/forms/forms.module#Forms"
      },
      {
        path: "tables",
        loadChildren: "./pages/tables/tables.module#TablesModule"
      },
      {
        path: "maps",
        loadChildren: "./pages/maps/maps.module#MapsModule"
      },
      {
        path: "widgets",
        loadChildren: "./pages/widgets/widgets.module#WidgetsModule"
      },
      {
        path: "charts",
        loadChildren: "./pages/charts/charts.module#ChartsModule"
      },
      {
        path: "calendar",
        loadChildren: "./pages/calendar/calendar.module#CalendarModulee"
      },
      {
        path: "",
        loadChildren:
          "./pages/pages/user-profile/user-profile.module#UserModule"
      },
      {
        path: "",
        loadChildren: "./pages/pages/timeline/timeline.module#TimelineModule"
      }
    ]
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "pages",
        loadChildren: "./pages/pages/pages.module#PagesModule"
      }
    ]
  }
];
