import { Routes } from "@angular/router";

import { ExtendedTablesComponent } from "./extended-tables/extended-tables.component";
import { RegularTablesComponent } from "./regular-tables/regular-tables.component";
import { NgxDatatableComponent } from "./ngx-datatable/ngx-datatable.component";

export const TablesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "regular",
        component: RegularTablesComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "extended",
        component: ExtendedTablesComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "ngx-datatable",
        component: NgxDatatableComponent
      }
    ]
  }
];
