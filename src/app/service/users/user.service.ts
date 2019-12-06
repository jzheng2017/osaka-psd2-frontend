import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LoginRequest} from '../../login/dto/loginrequest';
import {Login} from '../../login/dto/login';
import {GetUserRequest} from '../../login/dto/getuserrequest';
import {getToken} from 'codelyzer/angular/styles/cssLexer';

@Injectable({
    providedIn: 'root'
})
export class UserService {

  private getUserRequest: GetUserRequest;
  private apiUrl = 'http://localhost:8080';

    constructor(private httpClient: HttpClient, private router: Router) {
    }

  public getUser() {
    const getUserUrl = this.apiUrl + '/users/user/details?token=' + localStorage.getItem('token');
    const token = localStorage.getItem('token');
    return this.httpClient.get<any>(getUserUrl);
  }

  public getAttachedBankAccounts()  {
      const getAttachedBankAccountsUrl = this.apiUrl + '/users/user/attachedaccounts?token=' + localStorage.getItem('token');
      const token = localStorage.getItem('token');
      return this.httpClient.get<any>(getAttachedBankAccountsUrl);
  }

  public disconnectBankAccount(id: number) {
      const url = 'http://localhost:8080/disconnect';
      const token = localStorage.getItem('token');
      return this.httpClient.delete(url + `/?token=${token}&tableid=${id}`);
  }


    logout() {
        localStorage.removeItem('token');
    }
}

