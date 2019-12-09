import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RekeningService {
  private apiUrl = 'http://steinmilder.nl:8080';

  constructor(private http: HttpClient) {
  }


  getRekeningen(): Observable<any> {
    const token = localStorage.getItem('token');
    const rekeningUrl = this.apiUrl + `/accounts?token=${token}`;
    return this.http.get<any>(rekeningUrl);
  }

  private handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}

