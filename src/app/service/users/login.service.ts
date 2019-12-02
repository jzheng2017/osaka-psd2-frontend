import {Injectable} from '@angular/core';
import {LoginRequest} from '../../login/dto/loginrequest';
import {HttpClient} from '@angular/common/http';
import {Login} from '../../login/dto/login';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginRequest: LoginRequest;
  private apiUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  public login(r: Login) {
    this.loginRequest = new LoginRequest(r.email, r.password);
    const loginUrl = this.apiUrl + '/users/login';
    this.httpClient.post<any>(loginUrl, this.loginRequest).subscribe(data => {
        if (data.token != null) {
          localStorage.setItem('token', data.token);
          this.router.navigate(['overzicht/rekening']);
        }
      }
    );
  }
}