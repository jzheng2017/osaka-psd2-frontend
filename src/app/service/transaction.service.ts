import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Transaction} from '../transaction';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    private apiUrl = 'http://localhost:8080/rabo/accounts/TkwzOVJBQk8wMzIwMTMwODc4OkVVUg/transactions?token=AAIkYzQ1MTc3OGMtZGIyYy00NTFlLThmNTctOWJiNjI0MjIzMjlldkdshTai250biX71DAtcAZQXRE6vmyvfRAIDpT4FNBzXjs39YdUcCiQ6sZGXGCBXM_jF9YRYKL-cyUOvBfcg12ssb-70ZR9LGN7tfDgOsNrtp4fmq3UNpY8lr-gHkmPiyOhMYz5w6dZDIZmZpZQIfSxate6JTNb1ouhazcU80eApZxlGcsoC9pM45Bu8K2MKLMcMiazraJuG6Uonn-vtgIU4Yn1mtJ_2tJXTJVqCNF4'

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient) {
    }


    getTransacties(): Observable<Transaction[]> {
        return this.http.get<Transaction[]>(this.apiUrl);
    }

    getTransactie(id: number) {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<Transaction>(url);
    }

    updateTransaction(transaction: Transaction) {
        return this.http.put(this.apiUrl, transaction, this.httpOptions);
    }
}

