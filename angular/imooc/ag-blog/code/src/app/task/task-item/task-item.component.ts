import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.styl']
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  @Output() editTaskItem = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onTaskItemClick() {
    this.editTaskItem.emit();
  }

  onCheckBoxClick(ev: Event) {
    ev.stopPropagation();
  }

}
