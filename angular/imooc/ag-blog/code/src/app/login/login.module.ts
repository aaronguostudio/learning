import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module.ts';
import { LoginComponent } from './login/login.component';
// import { LoginRoutingModule } from './login-routing-module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    // LoginRoutingModule,
  ]
})
export class LoginModule { }
