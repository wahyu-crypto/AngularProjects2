import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from 'src/material.module';
import { MenuModule } from '../menu/menu.module';
import { OrderListModule } from '../order-list/order-list.module';
import { ChangeVispurModule } from '../change-vispur/change-vispur.module';
import { ChangeTableModule } from '../change-table/change-table.module';



@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MenuModule,
    OrderListModule,
    ChangeVispurModule,
    ChangeTableModule,
    MatNativeDateModule,
    MaterialExampleModule,
  ],
  exports: [
    OrderComponent
  ]
})
export class OrderModule { }
