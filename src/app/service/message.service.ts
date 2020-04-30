import { Item } from './../model/Item';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  subject = new Subject();
  item: Item;

constructor() { }

sendMsg(item ) {
  this.subject.next(item);
}

}
