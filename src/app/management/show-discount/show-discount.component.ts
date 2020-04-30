import { Discount } from './../../model/discount';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-discount',
  templateUrl: './show-discount.component.html',
  styleUrls: ['./show-discount.component.css']
})
export class ShowDiscountComponent implements OnInit {
  discount: Discount;
  discountList: Discount[];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  addDiscount(): void{
    this.router.navigate(['/adddiscount']);

  }

  updateDiscount(): void{
    console.log('discount is updated: ', this.discount);

  }

}
