import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { AppInitService } from './app-init.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
    constructor(private appInitService: AppInitService,
        private httpClient: HttpClient,
        @Inject(LOCALE_ID) private locale: string) { }

    privatePost<T>(url: string, body: {}, baseUrl = this.appInitService.appConfig?.httpBaseUrl) {
      return this.httpClient.post<T>(`${baseUrl}${url}`, body)
    }

    privateGet<T>(url: string, body: {}, baseUrl = this.appInitService.appConfig?.httpBaseUrl) {
      return this.httpClient.get<T>(`${baseUrl}${url}`, body)
    }
}