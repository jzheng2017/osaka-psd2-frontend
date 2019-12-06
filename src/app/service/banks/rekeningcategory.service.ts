import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RekeningSettings} from '../../rekening-settings/dto/rekening-settings';
import {Observable} from 'rxjs';
import {CategoryRequest} from '../../rekening-settings/dto/category-request';

@Injectable({
  providedIn: 'root'
})
export class RekeningcategoryService {
    id;

  constructor(private httpClient: HttpClient) { }

  public addCategory(settings: RekeningSettings): Observable<any> {
      const token = localStorage.getItem('token');
      const url = `http://localhost:8080/accounts/categories?token=${token}`;
      return this.httpClient.post<any>(url, settings);
  }

  public categorizeAccount(id: number, iban: string) {
      const token = localStorage.getItem('token');
      const url = `http://localhost:8080/accounts/categorize?token=${token}`;
      this.httpClient.post<any>(url, new CategoryRequest(id, iban)).subscribe();
      window.location.reload();

  }

  public getCategories(): Observable<CategoryRequest[]> {
      const token = localStorage.getItem('token');
      const url = `http://localhost:8080/accounts/categories?token=${token}`;
      return this.httpClient.get<CategoryRequest[]>(url);
  }
}
