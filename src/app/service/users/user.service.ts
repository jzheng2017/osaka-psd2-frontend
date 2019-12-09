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

