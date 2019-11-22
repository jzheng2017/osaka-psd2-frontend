import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Rekening} from '../rekening/rekening';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AddBank} from "../add-bank/add-bank";

@Injectable({
    providedIn: 'root'
})
export class RekeningService {
    private apiUrl = 'api/rekeningen'
    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient) {
    }

    getRekeningen(): Observable<Rekening[]> {
        return this.http.get<Rekening[]>(this.apiUrl);
    }

    getRekening(id: number) {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<Rekening>(url);
    }

    addRekening(bank: AddBank) {
        this.http.post<AddBank>(this.apiUrl, bank, this.httpOptions);
    }
}
