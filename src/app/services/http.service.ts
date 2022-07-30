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
  apiUrl = 'http://localhost:85/rest-api-yii2/web/v1';

  constructor(private appInitService: AppInitService,
    private httpClient: HttpClient,
    @Inject(LOCALE_ID) private locale: string) { }

  /**
   * Make a post request.
   * @param url string
   * @param body any
   * @param baseUrl string
   */
  post<T>(url: string, body: {}, baseUrl = this.apiUrl) {
    const newBody = {
      ...body,
      locale: this.locale
    };
    return this.httpClient.post<T>(`${baseUrl}${url}`, body, {
      headers: new HttpHeaders().set('Content-Language', this.locale)
    });
  }

  get<T>(url: string, baseUrl = this.apiUrl) {
    return this.httpClient.get<T>(`${baseUrl}${url}`);
  }

}
