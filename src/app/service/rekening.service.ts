import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Rekening} from '../rekening/rekening';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RekeningService {
    private apiUrl = 'api/rekeningen'

    constructor(private http: HttpClient) {
    }

    getRekeningen(): Observable<Rekening[]> {
        return this.http.get<Rekening[]>(this.apiUrl);
    }

    getRekening(id: number) {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<Rekening>(url);
    }
}
