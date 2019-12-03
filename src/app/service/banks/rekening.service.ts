import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Rekening} from '../../rekening/dto/rekening';

@Injectable({
    providedIn: 'root'
})
export class RekeningService {
    private apiUrl = 'http://localhost:8080';
    r: HttpErrorResponse;

    constructor(private http: HttpClient) {
    }


    getRekeningen(): Observable<Rekening> {
        const token = localStorage.getItem('token');
        const rekeningUrl = this.apiUrl + `/accounts?token=${token}`;
        // const rekeningUrl = this.apiUrl + `/accounts`;
        return this.http.get<Rekening>(rekeningUrl);

    }

}

