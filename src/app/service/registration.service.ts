import { Injectable } from '@angular/core';
import {Registration} from '../registration/registration';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient) { }


  public register(r: Registration) {
    this.handleRequest(r);
  }

  private handleRequest(r: Registration) {
    r.name = 'hans';
    const body = JSON.stringify(r);
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
