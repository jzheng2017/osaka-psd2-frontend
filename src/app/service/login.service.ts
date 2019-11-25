import { Injectable } from '@angular/core';
import {LoginRequest} from '../login/loginrequest';
import {HttpClient} from '@angular/common/http';
import {Login} from '../login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private req: LoginRequest;

  constructor(private httpClient: HttpClient) { }

  public login(r: Login) {
    this.req = new LoginRequest(r.email, r.password);

    const body = this.req;
    const url = 'http://localhost:8080/users/login';
    this.httpClient.post<any>(url, body).subscribe(data => console.log(data));
  }

}
