import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getCategories(userId) {
    const token = localStorage.getItem('token');
    const categoryUrl = this.apiUrl + `/accounts?token=${token}`;
    return this.http.get<any>(categoryUrl);
  }
}
