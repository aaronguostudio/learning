import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../models/item';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.styl']
})
export class ItemComponent implements OnInit {

  constructor(private messageService: MessageService) {

  }

  @Input() item: Item;

  ngOnInit() {
  }

  onDone (item: Item): void {
    this.messageService.add(`${item.title} is done`)
  }

  onDelete (item: Item): void {
    this.messageService.add('Done')
  }

}
