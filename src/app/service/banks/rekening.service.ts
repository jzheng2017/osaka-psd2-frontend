import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, retry} from "rxjs/operators";
import {ConfigService} from "../config/config.service";

@Injectable({
  providedIn: 'root'
})
export class RekeningService {
  private apiUrl = this.configService.baseUrl;

  constructor(private http: HttpClient, private configService: ConfigService) {
  }

  getRekeningen(): Observable<any> {
    const token = localStorage.getItem('token');
    const rekeningUrl = this.apiUrl + `/accounts?token=${token}`;
    return this.http.get<any>(rekeningUrl);
  }

  getRekeningenByCategory(categoryId): Observable<any> {
    const token = localStorage.getItem('token');
    const rekeningUrl = this.apiUrl + `/accounts/${categoryId}?token=${token}`;
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

  getConnections(): Observable<any> {
    const token = localStorage.getItem('token');
    const connectionsUrl = this.apiUrl + `/connections?token=${token}`;
    return this.http.get<any>(connectionsUrl);
  }
}

