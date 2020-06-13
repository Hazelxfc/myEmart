import { ITEMS } from './../mock-items';
import { Item } from './../model/Item';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService} from 'src/app/service/http.service';
@Injectable({
  providedIn: 'root'
})
export class CartService {
cartList: Item[];

constructor( private httpService: HttpService) { }


getCartItemList(): Observable<Item[]> {
  const url = 'cart/show-cart';
  return this.httpService.get(url).pipe();
}

addItemToCart(item: any): Observable<any[]> {
//  this.cartList.push(item);
  const url = 'cart/add-to-cart';
  return this.httpService.post(url, item).pipe();
  }

 }

