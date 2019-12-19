import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Transactioncollection} from '../../insights/dto/transactioncollection';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from '../config/config.service';
import {async} from 'q';
import {RekeningService} from './rekening.service';
import {Rekening} from '../../rekening/dto/rekening';
import {Transaction} from '../../transaction/dto/transaction';

@Injectable({
  providedIn: 'root'
})
export class InsightsService {
  private apiUrl = this.configService.apiBaseUrl;

  constructor(private rekeningService: RekeningService, private httpClient: HttpClient, private configService: ConfigService) { }


  getInsightsOfAccount(account: Rekening, token: string) {
    return this.httpClient.get(this.apiUrl + `/insights/${account.id}?token=${token}&tableid=${account.tableId}`);
  }

}
