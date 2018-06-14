import {StompService} from '@stomp/ng2-stompjs';
import {Message} from '@stomp/stompjs';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/of';
@Injectable()
export class MagicMirrorService {


  constructor(private stompService: StompService) {
  }

  initializeWebSocketConnection(queueName: string) {
    const stomp_subscription = this.stompService.subscribe(queueName);
    return stomp_subscription.map((message: Message) => {
      return message.body;
    });
  }
}
