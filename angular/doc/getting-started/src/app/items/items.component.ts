import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.styl']
})
export class ItemsComponent implements OnInit {

  // Dependency injection
  constructor (private itemService: ItemService) {

  }

  items: Item[];
  
  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

}
