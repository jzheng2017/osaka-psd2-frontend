import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RekeningService {
    private token = localStorage.getItem('token');
    private apiUrl = `http://localhost:8080/accounts?token=${this.token}`;
    constructor(private http: HttpClient) {
    }


    getRekeningen(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
    }

}
