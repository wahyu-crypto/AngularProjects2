import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridMoveTableComponent } from './grid-move-table.component';
import { FormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/material.module';



@NgModule({
  declarations: [
    GridMoveTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialExampleModule,
  ],
  exports: [
    GridMoveTableComponent
  ]
})
export class GridMoveTableModule { }
