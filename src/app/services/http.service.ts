import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { BehaviorSubject, Subscription, interval, Observable, of, iif, throwError } from 'rxjs';
import { catchError, delay, exhaustMap, retryWhen, switchMap, tap } from 'rxjs/operators';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

import { AppInitService } from './app-init.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private appInitService: AppInitService,
    private httpClient: HttpClient,
    @Inject(LOCALE_ID) private locale: string) { }

  /**
   * Make a post request.
   * @param url string
   * @param body any
   * @param baseUrl string
   */
  post<T>(url: string, body: {}, baseUrl = this.appInitService.appConfig.httpBaseUrl) {
    const newBody = {
      ...body,
      locale: this.locale
    };
    return this.httpClient.post<T>(`${baseUrl}${url}`, body, {
      headers: new HttpHeaders().set('Content-Language', this.locale)
    });
  }

  get<T>(url: string, baseUrl = this.appInitService.appConfig.httpBaseUrl) {
    return this.httpClient.get<T>(`${baseUrl}${url}`);
  }

}
