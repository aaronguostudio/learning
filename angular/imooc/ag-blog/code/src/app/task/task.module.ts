import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module.ts';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskRoutingModule } from './task-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { CopyTaskComponent } from './copy-task/copy-task.component';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from './new-task-list/new-task-list.component';

@NgModule({
  declarations: [
    TaskHomeComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskHeaderComponent,
    NewTaskComponent,
    CopyTaskComponent,
    ConfirmDialogComponent,
    NewTaskListComponent
  ],
  imports: [
    SharedModule,
    TaskRoutingModule,
  ],
  entryComponents: [
    NewTaskComponent,
    CopyTaskComponent,
    ConfirmDialogComponent,
    NewTaskListComponent
  ]
})
export class TaskModule { }
