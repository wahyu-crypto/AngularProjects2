import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from '../material.module';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { ChangeTableComponent } from './change-table/change-table.component';
import { ChangeVispurComponent } from './change-vispur/change-vispur.component';
import { GridMoveTableComponent } from './grid-move-table/grid-move-table.component';
import { MenuComponent } from './menu/menu.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { OpenTableComponent } from './open-table/open-table.component';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProductComponent } from './product/product.component';
import { VisitPurposeComponent } from './visit-purpose/visit-purpose.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ChangeTableComponent,
    ChangeVispurComponent,
    GridMoveTableComponent,
    MenuComponent,
    MenuEditComponent,
    OpenTableComponent,
    OrderComponent,
    OrderListComponent,
    ProductComponent,
    VisitPurposeComponent,
    HeaderComponent,
    SideNavComponent
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
