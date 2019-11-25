import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Rekening} from '../rekening/rekening';

@Injectable({
    providedIn: 'root'
})
export class RekeningService {
    private apiUrl = 'http://localhost:8080/rabo/accounts?token=AAIkYzQ1MTc3OGMtZGIyYy00NTFlLThmNTctOWJiNjI0MjIzMjlldkdshTai250biX71DAtcAZQXRE6vmyvfRAIDpT4FNBzXjs39YdUcCiQ6sZGXGCBXM_jF9YRYKL-cyUOvBfcg12ssb-70ZR9LGN7tfDgOsNrtp4fmq3UNpY8lr-gHkmPiyOhMYz5w6dZDIZmZpZQIfSxate6JTNb1ouhazcU80eApZxlGcsoC9pM45Bu8K2MKLMcMiazraJuG6Uonn-vtgIU4Yn1mtJ_2tJXTJVqCNF4';

    constructor(private http: HttpClient) {
    }

    getRekeningen(): Observable<Rekening[]> {
        return this.http.get<Rekening[]>(this.apiUrl);
    }

}
