import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './service/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = this.configService.apiBaseUrl;

  constructor(private http: HttpClient, private configService: ConfigService) {
  }

  getCategories(userId) {
    const token = localStorage.getItem('token');
    const categoryUrl = this.apiUrl + `/accounts?token=${token}`;
    return this.http.get<any>(categoryUrl);
  }
}
