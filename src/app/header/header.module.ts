import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { TableModule } from '../table/table.module';
import { FormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/material.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    MaterialExampleModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
