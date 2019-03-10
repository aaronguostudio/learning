import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: ':category',
    component: ListComponent
  },
  {
    path: ':category/:id',
    component: ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
