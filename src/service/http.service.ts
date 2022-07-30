import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { AppInitService } from './app-init.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = 'http://localhost:85/rest-api-yii2/web/v1';
  
  constructor(private appInitService: AppInitService,
      private httpClient: HttpClient,
      @Inject(LOCALE_ID) private locale: string) { }

  privatePost<T>(url: string, body: {}, baseUrl = this.apiUrl) {
    return this.httpClient.post<T>(`${baseUrl}${url}`, body)
  }

  privateGet<T>(url: string, body: {}, baseUrl = this.apiUrl) {
    return this.httpClient.get<T>(`${baseUrl}${url}`, body)
  }
}