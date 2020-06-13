import { Router } from '@angular/router';
import { ItemService } from './../../service/item.service';
import { Component, OnInit } from '@angular/core';
import { Item } from './../../model/Item';





@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  title = 'Add an item';
  item: Item;

  constructor(private itemService: ItemService,
              private router: Router ) { }

  ngOnInit() {
    }

    saveItem() {
      this.itemService.addItem(this.item);
      this.router.navigate(['/itemlist']);
    }

  }


