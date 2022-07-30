import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from './http.service';
import { TableSection } from '../table/table.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  tableSection$ = new BehaviorSubject<TableSection[]>(null as any);

  constructor(private http:HttpService) { }

  getTable() {
    return this.http.get<TableSection[]>('/table/table')
    .pipe(map(
      (data: TableSection[]) => {
          this.tableSection$.next(data);
          return data
      }
    ));
  }
}
