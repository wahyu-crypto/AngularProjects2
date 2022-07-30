import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from './http.service';
import { TableSection } from '../table/table.model';
import { HttpClient } from '@angular/common/http';
import { DataMenu } from '../menu/menu.model';
import { DataVispur } from '../visit-purpose/visit-purpose.model';

@Injectable({
  providedIn: 'root'
})
export class DataService { 

  constructor(private http:HttpService) { }

  tables() {
    return this.http.post<TableSection[]>('/table/table', '')
    .pipe(map(
      (data: TableSection[]) => {
          return data
      }
    ));
  }


  menus() {
    return this.http.post<DataMenu>('/menu/menu', '')
    .pipe(map(
      (data: DataMenu) => {
        return data
      }
    ))
  }

  vispur() {
    return this.http.post<DataVispur>('/visitpurpose/vispur', '')
    .pipe(map(
      (data: DataVispur) => {
        return data
      }
    ))
  }
}
