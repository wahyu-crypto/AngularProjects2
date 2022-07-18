import { Component, OnInit } from '@angular/core';
import { DataProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  dataProduct!: DataProduct;

  constructor (private postData:ProductService) { }

  ngOnInit(): void {
    this.postData.getProducts().subscribe((result: DataProduct)=>{
      this.dataProduct = result
    })
  }

}
