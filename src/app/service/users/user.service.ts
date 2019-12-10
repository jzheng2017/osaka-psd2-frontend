import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {GetUserRequest} from '../../login/dto/getuserrequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private getUserRequest: GetUserRequest;
  private apiUrl = 'http://steinmilder.nl:8080';

  constructor(private httpClient: HttpClient, private router: Router) {
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

