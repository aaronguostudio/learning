import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ContentComponent } from './content/content.component';
import { SharedModule } from '../shared/shared.module.ts';
import { ConvertToSpaces } from '../shared/convert-to-spaces.pip';
import { BlogRoutingModule } from './blog-routing.module';
import { NewBlogComponent } from './new-blog/new-blog.component';

@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent,
    ContentComponent,
    ConvertToSpaces,
    NewBlogComponent
  ],
  imports: [
    SharedModule,
    BlogRoutingModule,
  ],
  entryComponents: [
    NewBlogComponent
  ]
})
export class BlogModule { }
