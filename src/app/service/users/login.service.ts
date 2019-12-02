import {Injectable} from '@angular/core';
import {LoginRequest} from '../../login/dto/loginrequest';
import {HttpClient} from '@angular/common/http';
import {Login} from '../../login/dto/login';
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private req: LoginRequest;

    constructor(private httpClient: HttpClient, private router: Router) {
    }

    public login(r: Login) {
        this.req = new LoginRequest(r.email, r.password);

        const body = this.req;
        const url = 'http://localhost:8080/users/login';
        this.httpClient.post<any>(url, body).subscribe(data => {
                if (data.token != null) {
                    localStorage.setItem('token', data.token);
                    this.router.navigate(['overzicht/rekening']);
                }
            }
        );
    }

}
