import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Rekening} from '../rekening/rekening';

@Injectable({
    providedIn: 'root'
})
export class RekeningService {
    private apiUrl = 'http://localhost:8080/rabo/accounts?token=AAIkYzQ1MTc3OGMtZGIyYy00NTFlLThmNTctOWJiNjI0MjIzMjllXO9UG_k_mBz61cyIeOMaDrctlxR-FvYsUEi2ae_KF-x48Pq4AJ0t9ywmW0d--7_Wcg5YIN5q6t5bYR45bnnYoGeG5fL5HIKNxKBuGRCDQQas0rQfPM4QrBZnW4U8MI39226B5NB-AaMJ9LW_38dMZMs0hipt0Oh3MmpJP5T5EF62VqlUCposDjmI8T_CMVyfdqwefa-qGe1uE6v0KVWvbA';

    constructor(private http: HttpClient) {
    }

    getRekeningen(): Observable<Rekening[]> {
        return this.http.get<Rekening[]>(this.apiUrl);
        // return this.http.get<any>(this.apiUrl);

    }

}
