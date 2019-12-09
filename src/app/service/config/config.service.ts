import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config: any;

  constructor(private httpClient: HttpClient) {
  }

  loadConfig() {
    this.httpClient.get('../assets/config.json').subscribe(config => this.config = config);
  }

  getConfig() {
    return this.config;
  }
}
