import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ContentComponent } from './content/content.component';
import { SharedModule } from '../shared/shared.module.ts';
import { BlogRoutingModule } from './blog-routing.module';
import { ConvertToSpaces } from '../shared/convert-to-spaces.pip';

@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent,
    ContentComponent,
    ConvertToSpaces
  ],
  imports: [
    SharedModule,
    BlogRoutingModule,
  ],
  entryComponents: [
    //
  ]
})
export class BlogModule { }
