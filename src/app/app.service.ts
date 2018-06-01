import {StompService} from '@stomp/ng2-stompjs';
import {Message} from '@stomp/stompjs';
import {Injectable} from '@angular/core';

@Injectable()
export class MagicMirrorService {


  constructor(private stompService: StompService) {
  }

  initializeWebSocketConnection(responseFunc: Function, queueName: string) {
    const stomp_subscription = this.stompService.subscribe(queueName);
    stomp_subscription.map((message: Message) => {
      return message.body;
    }).subscribe((response: string) => {
      console.log(response);
    });
  }
}
