import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/table'},
  { path: 'table', component: HeaderComponent },
  { path: 'table/order', component: OrderComponent },
  { path: 'product', component: ProductComponent},
  { path: 'menu', component: MenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
