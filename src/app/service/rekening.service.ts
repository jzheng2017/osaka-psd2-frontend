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
        const rekeningUrl = this.apiUrl + `/accounts/?token=${localStorage.getItem('token')}`;
        return this.http.get<any>(rekeningUrl);
    }

}

