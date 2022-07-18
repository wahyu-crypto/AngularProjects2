import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeTableComponent } from './change-table.component';
import { TableModule } from '../table/table.module';
import { FormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/material.module';
import { TableComponent } from '../table/table.component';
import { GridMoveTableModule } from '../grid-move-table/grid-move-table.module';



@NgModule({
  declarations: [
    ChangeTableComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    GridMoveTableModule,
    FormsModule,
    MaterialExampleModule,
  ],
  exports: [
    ChangeTableComponent
  ]
})
export class ChangeTableModule { }
