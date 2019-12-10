import {Injectable} from '@angular/core';
import {LoginRequest} from '../../login/dto/loginrequest';
import {HttpClient} from '@angular/common/http';
import {Login} from '../../login/dto/login';
import {Router} from '@angular/router';
import {ConfigService} from "../config/config.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginRequest: LoginRequest;
  private apiUrl = this.configService.baseUrl;

  constructor(private httpClient: HttpClient, private configService: ConfigService) {
  }

  public login(r: Login) {
    this.loginRequest = new LoginRequest(r.email, r.password);
    const loginUrl = this.apiUrl + '/users/login';
    // this.httpClient.post<any>(loginUrl, this.loginRequest).subscribe(data => {
    //     if (data.token != null) {
    //       localStorage.setItem('token', data.token);
    //       this.router.navigate(['overzicht/rekening']);
    //     }
    //   }
    // );
    return this.httpClient.post<any>(loginUrl, this.loginRequest);
  }
}
