import { Injectable } from '@angular/core';
import {Registration} from '../registration/registration';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RegistrationRequest} from '../registration/registrationrequest';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

    private req: RegistrationRequest;
  constructor(private httpClient: HttpClient) { }


  public register(r: Registration) {
    this.handleRequest(r);
  }

  private handleRequest(r: Registration) {
    this.req = new RegistrationRequest('jam', r.email, r.password);

    const body = JSON.stringify(this.req);
    console.log(body);
    const url = 'http://localhost:8080/users/register';
    const headers = new HttpHeaders().set('ContentType', 'application/json');

    console.log(this.httpClient.post<any>(url, body, {headers}).subscribe(data => {
      console.log(data);
    }));
  }

  private handleResponse() {

  }

}
