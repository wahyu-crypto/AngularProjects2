import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeVispurComponent } from './change-vispur.component';
import { VisitPurposeModule } from '../visit-purpose/visit-purpose.module';
import { FormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/material.module';



@NgModule({
  declarations: [
    ChangeVispurComponent
  ],
  imports: [
    CommonModule,
    VisitPurposeModule,
    FormsModule,
    MaterialExampleModule,
  ],
  exports: [
    ChangeVispurComponent
  ]
})
export class ChangeVispurModule { }
