import { Router } from '@angular/router';
import { ITEMS } from './../mock-items';
import { Component, OnInit , Input} from '@angular/core';
import { Item } from '../model/Item';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  itemList: Item[];
  @Input() item: Item;
  constructor(private itemService: ItemService,
              private router: Router) { }

  ngOnInit() {
    this.getItemList();
  }

  getItemList(): void {
      this.itemService.getItemList()
                      .subscribe(itemList => this.itemList = itemList);
    }
  blockItem(item: Item): void{
    this.item = item;
    item.active = false;
    }

  unblockItem(item: Item ): void{
    this.item = item;
    item.active = true;
    }

    // viewDetail(item: Item ): void {
    //   this.item  =  item ;
    //   this.router.navigate(['/detail/{{item.id}}']);

    // }
  }


