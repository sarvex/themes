import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsComponent } from './sections.component';
import { HeadersComponent } from './headers/headers.component';
import { FeaturesComponent } from './features/features.component';
import { BlogsComponent } from './blogs/blogs.component';
import { TeamsComponent } from './teams/teams.component';
import { ProjectsComponent } from './projects/projects.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY_HERE'
        }),
        RouterModule
    ],
    declarations: [
        SectionsComponent,
        HeadersComponent,
        FeaturesComponent,
        BlogsComponent,
        TeamsComponent,
        ProjectsComponent,
        PricingComponent,
        TestimonialsComponent,
        ContactsComponent
    ],
    exports: [
        SectionsComponent
    ]
})
export class SectionsModule { }
