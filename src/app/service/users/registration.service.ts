import {Injectable} from '@angular/core';
import {Registration} from '../../registration/dto/registration';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RegistrationRequest} from '../../registration/dto/registrationrequests';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {

    private req: RegistrationRequest;

    constructor(private httpClient: HttpClient, private router: Router ) {
    }


    public register(r: Registration) {
        this.handleRequest(r);
    }

    private handleRequest(r: Registration) {
        this.req = new RegistrationRequest(r.name, r.email, r.password);

        const body = this.req;
        const url = 'http://localhost:8080/users/register';

        this.httpClient.post<any>(url, body).subscribe(data => {
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
