import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RekeningSettings} from '../../rekening-settings/dto/rekening-settings';
import {Observable} from 'rxjs';
import {CategoryRequest} from '../../rekening-settings/dto/category-request';
import {Category} from '../../rekening-settings/dto/category';
import {ConfigService} from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class RekeningcategoryService {
    id;
  private apiUrl = this.configService.baseUrl;

  constructor(private httpClient: HttpClient, private configService: ConfigService) {
  }

  public addCategory(settings: RekeningSettings): Observable<any> {
      const token = localStorage.getItem('token');
      const url = `${this.apiUrl}/categories?token=${token}`;
      return this.httpClient.post<any>(url, settings);
  }

  public categorizeAccount(id: number, iban: string) {
      const token = localStorage.getItem('token');
      const url = `${this.apiUrl}/accounts/categorize?token=${token}`;
      this.httpClient.post<any>(url, new CategoryRequest(id, iban)).subscribe();
      window.location.reload();

  }

  public getCategories(): Observable<Category[]> {
      const token = localStorage.getItem('token');
      const url = `${this.apiUrl}/accounts/categories?token=${token}`;
      return this.httpClient.get<Category[]>(url);
  }
}
