import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { LoginComponent } from '../login/login/login.component';
import { HttpClientModule } from '@angular/common/http';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { loadSvgResources } from '../utils/svg.util';

import { SharedModule } from '../shared/shared.module.ts';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    HttpClientModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    // LoginComponent,
  ]
})
export class CoreModule {
  // core module will only run once in the whole life
  // @SkipSelf will find CoreModule from parent
  // loadSvgResources will only load icons once
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MatIconRegistry,
    ds: DomSanitizer
  ) {
    if (parent) {
      throw new Error('Module already exists');
    }
    loadSvgResources(ir, ds);
  }
}
