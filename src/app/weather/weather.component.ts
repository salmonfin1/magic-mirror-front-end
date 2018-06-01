import { Component, OnInit } from '@angular/core';
import {MagicMirrorService} from '../app.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  private weatherList;


  constructor(public magicMirrorService: MagicMirrorService) {}

  updateWeatherList(response: string) {
    this.weatherList = JSON.parse(response);
  }

  ngOnInit(): void {
    this.magicMirrorService.initializeWebSocketConnection(this.updateWeatherList, '/weather' );

  }


}
