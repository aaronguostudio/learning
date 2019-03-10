import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.styl']
})
export class ListItemComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}
