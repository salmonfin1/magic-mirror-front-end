import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule, MatGridListModule, MatTableModule, MatCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import {StompConfig, StompService} from '@stomp/ng2-stompjs';
import { WeatherComponent } from './weather/weather.component';
import { TrainComponent } from './train/train.component';
import { CalendarComponent } from './calendar/calendar.component';
import {MagicMirrorService} from './app.service';

const stompConfig: StompConfig = {
  url: 'ws://localhost:8090/socket',
  headers: {
  },
  heartbeat_in: 0, // Typical value 0 - disabled
  heartbeat_out: 20000, // Typical value 20000 - every 20 seconds
  reconnect_delay: 5000,
  debug: true
};

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    TrainComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatGridListModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [
    StompService,
    {
      provide: StompConfig,
      useValue: stompConfig
    },
    MagicMirrorService,
    {
      provide: StompService,
      useClass: StompService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

