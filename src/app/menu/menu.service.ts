import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataMenu } from './menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  url = 'http://localhost:85/rest-api-yii2/web/v1/menu/menu';

  constructor(private http:HttpClient) { }

  getMenus() {
    return this.http.get<DataMenu>(this.url);
  }
}
