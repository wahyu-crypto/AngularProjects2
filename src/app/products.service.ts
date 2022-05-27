import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DataProduct } from './products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
url="https://dummyjson.com/products"
  constructor(private http:HttpClient) { }
  getProducts()
  {
    return this.http.get<DataProduct>(this.url);
  }
}
