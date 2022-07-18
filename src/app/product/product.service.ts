import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataProduct } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'https://dummyjson.com/products';

  constructor(private http:HttpClient) { }

  getProducts()
  {
    return this.http.get<DataProduct>(this.url);
  }
}
