import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatToolbarModule,
  MatButtonModule
} from '@angular/material';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import { EventListComponent } from './event-list/event-list.component';
import { ReachUsComponent } from './reach-us/reach-us.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeakerListComponent,
    EventListComponent,
    ReachUsComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    // FormsModule,
    // HttpModule,
    RouterModule.forRoot([
      {
        path: 'megasummit',
        redirectTo: '/'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
