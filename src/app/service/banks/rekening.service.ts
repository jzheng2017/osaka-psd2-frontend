import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RekeningService {
    private apiUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) {
    }


    getRekeningen(): Observable<any> {
        const token = localStorage.getItem('token');
        const rekeningUrl = this.apiUrl + `/accounts?token=${token}`;
        return this.http.get<any>(rekeningUrl);
    }

}

