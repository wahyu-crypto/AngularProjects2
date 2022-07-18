import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitPurposeComponent } from './visit-purpose.component';
import { FormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/material.module';



@NgModule({
  declarations: [
    VisitPurposeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialExampleModule,

  ],
  exports: [
    VisitPurposeComponent
  ]
})
export class VisitPurposeModule { }
