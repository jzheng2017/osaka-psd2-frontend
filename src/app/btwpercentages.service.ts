import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './service/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class BTWPercentagesService {
  private apiUrl = this.configService.apiBaseUrl;

  constructor(private httpClient: HttpClient, private configService: ConfigService) {
  }

  public getBTWPercentages() {
    const getBTWPercentagesUrl = `${this.apiUrl}/btw/getpercentages`;
    return this.httpClient.get<string[]>(getBTWPercentagesUrl);
  }
}
