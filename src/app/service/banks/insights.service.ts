import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from '../config/config.service';
import {RekeningService} from './rekening.service';
import {Rekening} from '../../rekening/dto/rekening';

@Injectable({
  providedIn: 'root'
})
export class InsightsService {
  private apiUrl = this.configService.apiBaseUrl;

  constructor(private rekeningService: RekeningService, private httpClient: HttpClient, private configService: ConfigService) {
  }


  getAllInsights() {
    const token = localStorage.getItem('token');
    return this.httpClient.get(this.apiUrl + `/insights?token=${token}`);
  }

  getInsightsOfAccount(account: Rekening, token: string) {
    return this.httpClient.get(this.apiUrl + `/insights/${account.id}?token=${token}&tableid=${account.tableId}`);
  }


}
