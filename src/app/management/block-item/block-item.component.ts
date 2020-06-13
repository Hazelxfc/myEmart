import { ItemService } from './../../service/item.service';
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
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  unblockItem(item: Item  ): void{
    // console.log('Item Unblocked:' + this.item);
    // tslint:disable-next-line:no-unused-expression
    item.active === true;
    this.itemService.updateItem(item);
  }

  blockItem(item: Item ): void{
   //  console.log('Item blocked:' + this.item);
   // tslint:disable-next-line:no-unused-expression
   item.active === false;
   this.itemService.updateItem(item);
  }


}
