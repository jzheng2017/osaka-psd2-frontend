import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Rekening} from '../rekening/rekening';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RekeningService {
    private apiUrl = 'http://localhost:8080/rabo/accounts?token=AAIkYzQ1MTc3OGMtZGIyYy00NTFlLThmNTctOWJiNjI0MjIzMjlloz6OidVZxWQwzJdnTz98bnpbNGhN8ZioSoI6GPqOiYn3sx3J7Zs8cP5_uBJvqsnMhF_6LoKOTMWHcc-R-rC6MOcsqnkCb6zQ5XzVSg2IkgB4zdp1nidHmgtVg98E8oByNEajZwB7q__HMG5CDpoxXvPI2AFYbsouyMoO8_DFHJEpx6xWW1Zs4QaCY2dhUAubA4uKYGGLTTejWtvoplqgRg';

    constructor(private http: HttpClient) {
    }

    getRekeningen(): Observable<Array<Rekening>> {
        return this.http.get<Array<Rekening>>(this.apiUrl);
        // return this.http.get<any>(this.apiUrl);

    }
}
