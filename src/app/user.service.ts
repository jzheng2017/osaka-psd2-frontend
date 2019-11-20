import { Injectable } from '@angular/core';
import { User} from './user';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Users} from './users';


@Injectable({
  providedIn: 'root'
})
export class UserService {
    private baseUrl = 'http://localhost:8080/angular';
    private headers = new HttpHeaders().set('Content-Type', 'application/json');
    private l: Users[] = [];
    private i: number;

  constructor(private httpClient: HttpClient) { }

    getUsers(): Observable<any> {
        return this.httpClient.get<User[]>('http://localhost:8080/angular');
    }

    getAllUsers(): Observable <any> {
        console.log('Here');
        return this.httpClient.get('http://localhost:8080/angular')
            .pipe(map((response: Response) => {
                console.log(response.json());
                return response.json();
            }));
    }

    public newPlaylist(l: Array<any>) {
        const endpointUrl = 'http://localhost:8080/angular';

        try {
            this.httpClient.get<any>(endpointUrl).forEach(value => {
               l.fill('kaas', 1);
               this.i += 1;
            });
            console.log(l);
        } catch (err) {
            console.log('EPIC FAIL');
        }
    }

    public getPlaylist() {
      // this.i = 0;
      // this.newPlaylist().then(value => {
      //     this.l[this.i] = value;
      //     this.i += 1;
      // });
      // console.log(this.l[0]);
      // return this.l;
    }
}
