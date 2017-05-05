import { NavBarComponent } from './nav/navbar.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        EventsAppComponent,
        EventThumbnailComponent,
        EventsListComponent,
        NavBarComponent],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}