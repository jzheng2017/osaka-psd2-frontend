import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = this.configService.apiBaseUrl;

  constructor(private httpClient: HttpClient, private configService: ConfigService) {
  }

  public getUser() {
    const token = localStorage.getItem('token');
    const getUserUrl = `${this.apiUrl}/users/user/details?token=${token}`;
    return this.httpClient.get<any>(getUserUrl);
  }

  public getAttachedBankAccounts() {
    const token = localStorage.getItem('token');
    const getAttachedBankAccountsUrl = `${this.apiUrl}/users/user/attachedaccounts?token=${token}`;
    return this.httpClient.get<any>(getAttachedBankAccountsUrl);
  }

  public disconnectBankAccount(id: number) {
    const token = localStorage.getItem('token');
    const url = `${this.apiUrl}/disconnect?token=${token}&tableid=${id}`;
    return this.httpClient.delete(url);
  }

  logout() {
    localStorage.removeItem('token');
  }
}

