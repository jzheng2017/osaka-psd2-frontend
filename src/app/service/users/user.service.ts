import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {GetUserRequest} from "../../login/dto/getuserrequest";

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


    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    }
}
