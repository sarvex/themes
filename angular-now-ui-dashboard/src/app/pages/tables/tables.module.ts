import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { RegularTablesComponent } from "./regular-tables/regular-tables.component";
import { ExtendedTablesComponent } from "./extended-tables/extended-tables.component";
import { TablesRoutes } from "./tables.routing";
import { NgxDatatableComponent } from "./ngx-datatable/ngx-datatable.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TablesRoutes),
    NgxDatatableModule
  ],
  declarations: [
    RegularTablesComponent,
    ExtendedTablesComponent,
    NgxDatatableComponent
  ]
})
export class TablesModule {}
