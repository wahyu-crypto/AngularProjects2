import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuRoutingModule } from './menu-routing.module';
import { MaterialExampleModule } from 'src/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MenuRoutingModule,
    MaterialExampleModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
