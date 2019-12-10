import {Injectable} from '@angular/core';
import {Registration} from '../../registration/dto/registration';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RegistrationRequest} from '../../registration/dto/registrationrequests';
import {Router} from '@angular/router';
import {ConfigService} from "../config/config.service";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private registrationRequest: RegistrationRequest;

  private apiUrl = this.configService.apiBaseUrl;

  constructor(private httpClient: HttpClient, private configService: ConfigService) {
  }


  public register(r: Registration) {
    this.registrationRequest = new RegistrationRequest(r.name, r.email, r.password);
    const registerUrl = this.apiUrl + '/users/register';
    return this.httpClient.post<any>(registerUrl, this.registrationRequest);
  }
}
