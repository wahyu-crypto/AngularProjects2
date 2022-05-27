import { Component } from '@angular/core';
import { DataProduct } from './products.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataProduct!: DataProduct;

  constructor (private postData:ProductsService){}
  ngOnInit()
  {
    this.postData.getProducts().subscribe((result: DataProduct)=>{
      console.warn("result",result)
      this.dataProduct = result
    })
  }
}
