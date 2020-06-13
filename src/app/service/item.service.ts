import { Item } from './../model/Item';
import { ITEMS } from './../mock-items';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService} from 'src/app/service/http.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
itemList: Item[];
constructor(private httpService: HttpService ) {
 }


getItemList(): Observable<Item[]> {
  // return of(ITEMS);
  const url = 'item//findall';
  return this.httpService.get(url).pipe();
}

getItemById(itemId: any): Observable<Item>{
  const url = 'item/search-by-item-id/' + itemId;
  return this.httpService.get(url).pipe();
}

addItem(item: Item): any{
  console.log(item);
  const url = 'item/add';
  return this.httpService.post(url, item).pipe();
}

updateItem(item: Item ): any{
  const url = 'item/edit-by-item-id';
  return this.httpService.post(url, item).pipe();
}
}
