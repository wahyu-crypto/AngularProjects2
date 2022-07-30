import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableSection } from './table.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  apiUrl = "http://localhost:85/rest-api-yii2/web/v1/table/table"

  constructor(
    private http: HttpClient
  ) { }

  getTable() {
    return this.http.get<TableSection[]>(this.apiUrl);
  }
}
