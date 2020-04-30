import { ITEMS } from './../mock-items';
import { Item } from './../model/Item';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartitem: Item;
  cartitemList: Item[];
  k: number;
  constructor(private router: Router,
              private cartService: CartService) { }

  ngOnInit() {
    this.getCartItemList();
  }

  getCartItemList(): void {
    this.cartService.getCartItemList()
                    .subscribe(cartitemList => this.cartitemList = cartitemList);
  }

  deleteFromCart(): void{

    alert('delete done!');
  }

  getTotal( ): number{
    return  this.k;
  }

  backToSearch(): void{
    this.router.navigate(['/itemlist']);
  }

  viewDiscount(): void{
    this.router.navigate(['/discount']);
  }

  checkOut(): void{
    this.router.navigate(['/']);

  }

}
