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

  private apiUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient, private router: Router) {
  }


  public register(r: Registration) {
    this.handleRequest(r);
  }

  private handleRequest(r: Registration) {
    this.registrationRequest = new RegistrationRequest(r.name, r.email, r.password);
    const registerUrl = this.apiUrl + '/users/register';

    this.httpClient.post<any>(registerUrl, this.registrationRequest).subscribe(data => {
      this.handleResponse(data);
    });
  }

  private handleResponse(data) {
    if (data.token != null) {
      localStorage.setItem('token', data.token);
      this.router.navigate(['overzicht/rekeningen']);
    }
  }

}
