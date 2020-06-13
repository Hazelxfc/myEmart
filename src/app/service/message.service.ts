import { Item } from './../model/Item';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { HttpService} from 'src/app/service/http.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  subject = new Subject();
  item: Item;

constructor(private httpService: HttpService) { }

sendMsg(item ) {
  this.subject.next(item);
}

}
