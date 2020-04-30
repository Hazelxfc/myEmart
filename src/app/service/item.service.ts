import { Item } from './../model/Item';
import { ITEMS } from './../mock-items';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

constructor( ) { }

getItemList(): Observable<Item[]> {
  return of(ITEMS);
}
getItem(id: number): Observable<Item> {
  return of(ITEMS.find(item => item.id === id));
}

}
