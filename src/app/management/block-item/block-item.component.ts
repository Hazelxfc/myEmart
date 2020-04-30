import { Item } from './../../model/Item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-item',
  templateUrl: './block-item.component.html',
  styleUrls: ['./block-item.component.css']
})
export class BlockItemComponent implements OnInit {
 item: Item;
 itemList: Item[];
  constructor() { }

  ngOnInit() {
  }

  unblockItem(): void{
    console.log('Item Unblocked:' + this.item);
  }

  blockItem(): void{
    console.log('Item blocked:' + this.item);
  }


}
