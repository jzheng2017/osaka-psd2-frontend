import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Transaction} from '../transaction';
import {tap} from "rxjs/operators";
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    // private apiUrl = 'api/transactions';
    // httpOptions = {
    //     headers: new HttpHeaders({'Content-Type': 'application/json'})
    // };
    private apiUrl = 'http://localhost:8080/rabo/accounts/TkwzOVJBQk8wMzIwMTMwODc4OkVVUg/transactions?token=AAIkYzQ1MTc3OGMtZGIyYy00NTFlLThmNTctOWJiNjI0MjIzMjllcbYdYtsuLgHsi_fYN6Lwd4TUlP2Kb3Pez8czQxtoJP2rYLUNhqdLdV-FbBGAgjoA0vMwdq90MJAQ_qrXmqp9HEnefJ-qE3SqTtwlZ3DyRlw9SW_D1fl2AcH40GVooGFyPDDBTsRVXpKbh61EZH_ZG26v9FJcwsEXkXZwgBksGH18lq0jSfAjwgqNxJfNjZPzzJQZeMmkJLzlzNn_6oObv_H_7Fh2WkBIhRCv8oiZHBI'


    constructor(private http: HttpClient) {
    }


    getTransacties(): Observable<Transaction[]> {
        return this.http.get<Transaction[]>(this.apiUrl);
    }
}

