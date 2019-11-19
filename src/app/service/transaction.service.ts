import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Transaction} from '../transaction';

@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    private apiUrl = 'api/transactions';

    constructor(private http: HttpClient) {
    }


    getTransacties() {
        return this.http.get<Transaction[]>(this.apiUrl);
    }
}

