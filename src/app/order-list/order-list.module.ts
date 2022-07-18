import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list.component';
import { MenuModule } from '../menu/menu.module';
import { MaterialExampleModule } from 'src/material.module';
import { MenuEditModule } from '../menu-edit/menu-edit.module';



@NgModule({
  declarations: [
    OrderListComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    MenuEditModule,
    MaterialExampleModule,
  ],
  exports: [
    OrderListComponent
  ]
})
export class OrderListModule { }
