import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MaterialExampleModule } from 'src/material.module';
import { OpenTableModule } from '../open-table/open-table.module';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    OpenTableModule,
    MaterialExampleModule,
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
