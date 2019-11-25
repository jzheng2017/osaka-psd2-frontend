import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Rekening} from '../rekening/rekening';

@Injectable({
    providedIn: 'root'
})
export class RekeningService {
    private apiUrl = 'http://localhost:8080/rabo/accounts?token=AAIkYzQ1MTc3OGMtZGIyYy00NTFlLThmNTctOWJiNjI0MjIzMjllrMjHOgiu9lfQ6TQDjpjoHWzPU9WcKfIdwnqSOO9U7Zw3AoHOeMlxPLFueEXhdIOXkUM76w8BJCvk_lsjfv_82_42R057l8T_b4xY5TokQyqHnLZFGpJUbIV8AkUl3Liw_xmJo8PmkWeXlwsb_f31U8VSeRjsBAHQfnbCb5p-BgYYFut9olPR6cixw0EinCpfyt_51IwFDwPUeWmsjwurX-3w4uWmAM03U0RpXk4awCA';

    constructor(private http: HttpClient) {
    }

    getRekeningen(): Observable<Rekening[]> {
        return this.http.get<Rekening[]>(this.apiUrl);
    }

}
