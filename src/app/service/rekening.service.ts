import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Rekening} from '../rekening/rekening';

@Injectable({
    providedIn: 'root'
})
export class RekeningService {
    private apiUrl = 'http://localhost:8080/rabo/accounts?token=AAIkYzQ1MTc3OGMtZGIyYy00NTFlLThmNTctOWJiNjI0MjIzMjllLOWLzDrwjjwlVz2GZ9at8-GpnAb1sOeUO0iznI2dzlDNjeES_pao16cfHFjMWbZhV_FDGhXLV9GlqMDGxPLKx_wh-WFCB_o0HYteUNZM5efLgnWC-o49RW0lsKiE6OjQiwreTCRGTsmc_ttUp4tg4JZ-pMa_eIw_aoIOkD7ghC6JXRs3uIx7FsruV5UhMxf-zalDE5NDt6XebGZCjCmFbw';

    constructor(private http: HttpClient) {
    }

    getRekeningen(): Observable<Rekening[]> {
        return this.http.get<Rekening[]>(this.apiUrl);
        // return this.http.get<any>(this.apiUrl);

    }
}
