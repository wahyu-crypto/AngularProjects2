import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductModule } from './product/product.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from '../material.module';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MenuModule } from './menu/menu.module';
import { OrderModule } from './order/order.module';
import { TableModule } from './table/table.module';
import { MenuEditModule } from './menu-edit/menu-edit.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MaterialExampleModule,
    MatCarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
