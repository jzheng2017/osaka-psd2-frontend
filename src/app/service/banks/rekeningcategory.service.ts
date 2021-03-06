import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RekeningSettings} from '../../rekening-settings/dto/rekening-settings';
import {Observable} from 'rxjs';
import {CategoryRequest} from '../../rekening-settings/dto/category-request';
import {Category} from '../../rekening-settings/dto/category';
import {ConfigService} from '../config/config.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RekeningcategoryService {
  private apiUrl = this.configService.apiBaseUrl;

  constructor(private httpClient: HttpClient, private configService: ConfigService, private router: Router) {
  }

  public addCategory(settings: RekeningSettings): Observable<any> {
    const token = localStorage.getItem('token');
    const url = `${this.apiUrl}/accounts/categories?token=${token}`;
    return this.httpClient.post<any>(url, settings);
  }

  public categorizeAccount(id: number, iban: string) {
    const token = localStorage.getItem('token');
    const url = `${this.apiUrl}/accounts/categorize?token=${token}`;
    this.httpClient.post<any>(url, new CategoryRequest(id, iban)).subscribe();

  }

  public getCategories(): Observable<Category[]> {
    const token = localStorage.getItem('token');
    const url = `${this.apiUrl}/accounts/categories?token=${token}`;
    return this.httpClient.get<Category[]>(url);
  }
}
