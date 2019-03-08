import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// shared_module 的主要作用是统一导入和导出共享的模块

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule
  ]
})
export class SharedModule { }
