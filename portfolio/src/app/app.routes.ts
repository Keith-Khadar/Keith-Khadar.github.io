import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TimelinePageComponent } from './timeline-page/timeline-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
    {path: "home", component: HomePageComponent},
    {path: "timeline", component: TimelinePageComponent},
    {path: "contact", component: ContactPageComponent}
];
