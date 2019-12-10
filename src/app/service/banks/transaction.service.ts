import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Transaction} from '../../transaction/dto/transaction';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Transfer} from '../../transfer/transfer';
import {CategorizeRequest} from '../../transaction-categorize/dto/categorize-request';
import {TransactionCategory} from '../../transaction-categorize/dto/transaction-category';
import {ConfigService} from "../config/config.service";

export interface PaymentResponse {
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = this.configService.apiBaseUrl;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient, private configService: ConfigService) {
  }

  getTransacties(id: string, tableid: string): Observable<any> {
    const token = localStorage.getItem('token');
    const transactieUrl = this.apiUrl + `/accounts/${id}/details?token=${token}&tableid=${tableid}`;
    return this.http.get<any>(transactieUrl);
  }

  getTransactie(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Transaction>(url);
  }

  updateTransaction(transaction: Transaction) {
    return this.http.put(this.apiUrl, transaction, this.httpOptions);
  }

  createTransaction(transaction: Transfer, tableId: string) {
    const token = localStorage.getItem('token');
    const transactionUrl = `${this.apiUrl}/payment?token=${token}&tableid=${tableId}`;
    return this.http.post<PaymentResponse>(transactionUrl, transaction, this.httpOptions);
  }

  createCategory(request: CategorizeRequest) {
    const token = localStorage.getItem('token');
    const url = `${this.apiUrl}/transactions/categories/create?token=${token}`;
    return this.http.post<any>(url, request);
  }

  categorizeTransaction(request: CategorizeRequest) {
    const token = localStorage.getItem('token');
    const url = `${this.apiUrl}/transactions/categories/${request.id}/assign?token=${token}`;
    return this.http.post<any>(url, request);
  }

  getCategories() {
    const token = localStorage.getItem('token');
    const url = `${this.apiUrl}/transactions/categories?token=${token}`;
    return this.http.get<TransactionCategory[]>(url);
  }
}


