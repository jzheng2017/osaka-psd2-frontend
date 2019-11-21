import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Transaction} from '../transaction';
import {tap} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    private apiUrl = 'api/transactions';
    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient) {
    }


    getTransacties() {
        return this.http.get<Transaction[]>(this.apiUrl);
    }

    getTransactie(id: number) {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<Transaction>(url);
    }

    updateComment(transaction: Transaction) {
        return this.http.put(this.apiUrl, transaction, this.httpOptions);
    }
}

