import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuEditComponent } from './menu-edit.component';
import { MenuModule } from '../menu/menu.module';
import { MaterialExampleModule } from 'src/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MenuEditComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    FormsModule,
    MaterialExampleModule,
  ],
  exports: [
    MenuEditComponent
  ]
})
export class MenuEditModule { }
