import { Router } from '@angular/router';
import { Discount } from './../../model/discount';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-discount',
  templateUrl: './add-discount.component.html',
  styleUrls: ['./add-discount.component.css']
})
export class AddDiscountComponent implements OnInit {
 title = 'Add Discount';
 discount: Discount;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  saveDiscount(): void {
    this.router.navigate(['/showdiscount']);

  }

}
