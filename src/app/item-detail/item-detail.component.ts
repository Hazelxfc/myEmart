import { MessageService } from './../service/message.service';
import { CartService } from './../service/cart.service';
import { Item } from './../model/Item';
import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

   @Input() item: Item;

  constructor(
    private router: Router,
    private cartService: CartService,
    private msgService: MessageService )
   { }
  ngOnInit() {
  }

  addToCart() {
     alert('add to cart successfully!');
     this.cartService.addItemToCart(this.item);
  }
  checkOut(){
    this.router.navigate(['/cart']);
  }
}
