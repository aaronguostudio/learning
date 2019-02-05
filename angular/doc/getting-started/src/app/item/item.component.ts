import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../models/item'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.styl']
})
export class ItemComponent implements OnInit {

  constructor() { }

  // item: Item = {
  //   id: '1',
  //   title: 'test',
  //   details: 'lorem',
  //   date: '20190205',
  // }

  @Input() item: Item;

  ngOnInit() {
  }

  onDone (item: Item): void {
    alert(1)
  }

  onDelete (item: Item): void {
    alert(2)
  }

}
