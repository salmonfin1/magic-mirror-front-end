import { Component, OnInit } from '@angular/core';
import {MagicMirrorService} from '../app.service';
import {Calendar} from './calendar.models';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  private calendarResponse: Calendar[];
  constructor(public magicMirrorService: MagicMirrorService) { }

  ngOnInit() {
      const messageObservable = this.magicMirrorService.initializeWebSocketConnection('/calendar' );
      messageObservable.subscribe((response) => this.calendarResponse = JSON.parse(response));
  }

}
