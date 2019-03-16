import { Component, OnInit, Input, Output, EventEmitter, HostBinding , HostListener, ChangeDetectionStrategy} from '@angular/core';
import { cardAnim } from '../../anims/card.anim'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.styl'],
  animations: [
    cardAnim
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  @Output() editTaskItem = new EventEmitter<void>();
  @HostBinding('@card') cardState = 'out'; // HostBinding 就相当于把这一句 bind 到组件上

  @HostListener('mouseenter')
  onMouseEnter() {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardState = 'out';
  }


  constructor() { }

  ngOnInit() {
    //
  }

  onTaskItemClick() {
    this.editTaskItem.emit();
  }

  onCheckBoxClick(ev: Event) {
    ev.stopPropagation();
  }

}
