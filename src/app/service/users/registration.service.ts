import {Injectable} from '@angular/core';
import {Registration} from '../../registration/dto/registration';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RegistrationRequest} from '../../registration/dto/registrationrequests';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private registrationRequest: RegistrationRequest;

  private apiUrl = 'http://steinmilder.nl:8080';

  constructor(private httpClient: HttpClient, private router: Router) {
  }


  public register(r: Registration) {
    this.registrationRequest = new RegistrationRequest(r.name, r.email, r.password);
    const registerUrl = this.apiUrl + '/users/register';
    return this.httpClient.post<any>(registerUrl, this.registrationRequest);
  }
}
