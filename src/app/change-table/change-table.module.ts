import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeTableComponent } from './change-table.component';
import { TableModule } from '../table/table.module';
import { FormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/material.module';
import { TableComponent } from '../table/table.component';



@NgModule({
  declarations: [
    ChangeTableComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    MaterialExampleModule,
  ],
  exports: [
    ChangeTableComponent
  ]
})
export class ChangeTableModule { }
