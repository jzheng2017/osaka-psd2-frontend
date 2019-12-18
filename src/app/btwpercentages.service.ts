import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './service/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class BTWPercentagesService {
  private apiUrl = this.configService.apiBaseUrl;
  constructor(private httpClient: HttpClient, private configService: ConfigService) { }

  public getBTWPercentages() {
    const token = localStorage.getItem('token');
    const getBTWPercentagesUrl = `${this.apiUrl}/users/user/details?token=${token}`;
    return this.httpClient.get<string[]>(getBTWPercentagesUrl);
  }
}
