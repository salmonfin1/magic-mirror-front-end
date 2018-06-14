import { Component, OnInit } from '@angular/core';
import {MagicMirrorService} from '../app.service';
import {Observable} from 'rxjs';
import {Weather} from './weather.models';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  private weatherResponse: Weather[];
  constructor(public magicMirrorService: MagicMirrorService) {}

  ngOnInit(): void {
    const messageObservable = this.magicMirrorService.initializeWebSocketConnection('/weather' );
    messageObservable.subscribe((response) => {
        const responseObj: Weather[] = JSON.parse(response);
        for (const weather of responseObj) {
            weather.main.temp_min = Math.round(weather.main.temp_min - 273.15);
            weather.main.temp_max = Math.round(weather.main.temp_max - 273.15);
        }
        this.weatherResponse = responseObj;

    }
    );
  }




}
