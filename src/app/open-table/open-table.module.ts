import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenTableComponent } from './open-table.component';
import { MaterialExampleModule } from 'src/material.module';
import { FormsModule } from '@angular/forms';
import { VisitPurposeModule } from '../visit-purpose/visit-purpose.module';



@NgModule({
  declarations: [
    OpenTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialExampleModule,
    VisitPurposeModule
  ],
  exports: [
    OpenTableComponent
  ]
})
export class OpenTableModule { }
