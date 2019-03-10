import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { ContentComponent } from './content/content.component';
import { ContentGuard } from './content/content.guard';

const routes: Routes = [
  {
    path: ':category',
    component: ListComponent
  },
  {
    path: ':category/:id',
    canActivate: [ ContentGuard ],
    component: ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
