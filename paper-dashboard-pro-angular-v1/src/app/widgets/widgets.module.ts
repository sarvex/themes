import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WidgetsComponent } from './widgets.component';
import { WidgetsRoutes } from './widgets.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(WidgetsRoutes),
        FormsModule
    ],
    declarations: [WidgetsComponent]
})

export class WidgetsModule {}
