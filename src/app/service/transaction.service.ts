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
    private apiUrl = 'http://localhost:8080/rabo/accounts/TkwzOVJBQk8wMzIwMTMwODc4OkVVUg/transactions?token=AAIkYzQ1MTc3OGMtZGIyYy00NTFlLThmNTctOWJiNjI0MjIzMjllrMjHOgiu9lfQ6TQDjpjoHWzPU9WcKfIdwnqSOO9U7Zw3AoHOeMlxPLFueEXhdIOXkUM76w8BJCvk_lsjfv_82_42R057l8T_b4xY5TokQyqHnLZFGpJUbIV8AkUl3Liw_xmJo8PmkWeXlwsb_f31U8VSeRjsBAHQfnbCb5p-BgYYFut9olPR6cixw0EinCpfyt_51IwFDwPUeWmsjwurX-3w4uWmAM03U0RpXk4awCA'


    constructor(private http: HttpClient) {
    }


    getTransacties(): Observable<Transaction[]> {
        return this.http.get<Transaction[]>(this.apiUrl);
    }
}

