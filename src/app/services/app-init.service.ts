import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from '../models/app-config.model';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {
    appConfig: AppConfig;

    constructor(private httpClient: HttpClient) { }

    async init() {
        this.appConfig = await this.httpClient.get<AppConfig>('./assets/params.json').toPromise();
    }

}