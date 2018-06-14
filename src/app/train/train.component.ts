import { Component, OnInit } from '@angular/core';
import {MagicMirrorService} from '../app.service';
import {Schedule} from './train.models';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {
  private schedules: Schedule[];
  constructor(public magicMirrorService: MagicMirrorService) { }

  ngOnInit() {
      const messageObservable = this.magicMirrorService.initializeWebSocketConnection('/trains' );
      messageObservable.subscribe((response) => this.schedules = JSON.parse(response));
  }

}
