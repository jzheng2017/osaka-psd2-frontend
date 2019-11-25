import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Rekening} from '../rekening/rekening';

@Injectable({
    providedIn: 'root'
})
export class RekeningService {
    private apiUrl = 'http://localhost:8080/rabo/accounts?token=AAIkYzQ1MTc3OGMtZGIyYy00NTFlLThmNTctOWJiNjI0MjIzMjllcbYdYtsuLgHsi_fYN6Lwd4TUlP2Kb3Pez8czQxtoJP2rYLUNhqdLdV-FbBGAgjoA0vMwdq90MJAQ_qrXmqp9HEnefJ-qE3SqTtwlZ3DyRlw9SW_D1fl2AcH40GVooGFyPDDBTsRVXpKbh61EZH_ZG26v9FJcwsEXkXZwgBksGH18lq0jSfAjwgqNxJfNjZPzzJQZeMmkJLzlzNn_6oObv_H_7Fh2WkBIhRCv8oiZHBI';

    constructor(private http: HttpClient) {
    }

    getRekeningen(): Observable<Rekening[]> {
        return this.http.get<Rekening[]>(this.apiUrl);
    }

}
