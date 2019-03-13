import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.styl']
})
export class TaskHeaderComponent implements OnInit {

  @Input() header = '';
  @Output() editTaskListName = new EventEmitter<void>();
  @Output() newTask = new EventEmitter<void>();
  @Output() editTask = new EventEmitter<void>();
  @Output() moveTask = new EventEmitter<void>();
  @Output() deleteTask = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onEditTaskListName() {
    this.editTaskListName.emit();
  }

  onNewTaskClick() {
    this.newTask.emit();
  }

  onMoveTaskClick() {
    this.moveTask.emit();
  }

  onDeleteClick() {
    this.deleteTask.emit();
  }

}
