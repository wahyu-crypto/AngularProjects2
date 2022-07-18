import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/model/app-config.model';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {
  appConfig: AppConfig | undefined;

  constructor(
    private httpClient: HttpClient
  ) { }

  async init() {
    this.appConfig = await this.httpClient.get<AppConfig>('./assets/params.json').toPromise();
  }
}
