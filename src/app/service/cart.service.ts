import { ITEMS } from './../mock-items';
import { Item } from './../model/Item';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
cartList: Item[];

constructor( ) { }


getCartItemList(): Observable<Item[]> {
  return of(ITEMS);
}

addItemToCart(item: Item): void {
  this.cartList.push(item);

  }

 }

