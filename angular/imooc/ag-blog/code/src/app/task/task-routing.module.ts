import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TaskHomeComponent } from './task-home/task-home.component';

const routes: Routes = [
  {
    path: 'task',
    component: TaskHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {}
