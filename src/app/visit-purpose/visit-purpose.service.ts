import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataVispur } from './visit-purpose.model';

@Injectable({
  providedIn: 'root'
})
export class VisitPurposeService {
  apiUrl = "http://localhost:85/rest-api-yii2/web/v1/visitpurpose/vispur";

  constructor(
    private http: HttpClient
  ) { }

  getVispur() {
    return this.http.get<DataVispur>(this.apiUrl);
  }
}
