import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Transaction} from '../transaction';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    private apiUrl = 'http://steinmilder.nl:8080'

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    }


    getTransacties(id: string, tableid: string): Observable<any> {
        const transactieUrl = this.apiUrl + `/accounts/${id}/details?token=${localStorage.getItem('token')}&tableid=${tableid}`;
        return this.http.get<any>(transactieUrl);
    }

    getTransactie(id: number) {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<Transaction>(url);
    }

    updateTransaction(transaction: Transaction) {
        return this.http.put(this.apiUrl, transaction, this.httpOptions);
    }
}

