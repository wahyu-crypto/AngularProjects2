import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from 'src/material.module';
import { MatCarouselModule } from '@ngmodule/material-carousel';

@NgModule({
  declarations: [
    ProductComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    MatCarouselModule.forRoot()
  ],
  exports: [
    ProductComponent,
  ]
})
export class ProductModule { }
