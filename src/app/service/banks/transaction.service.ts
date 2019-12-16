import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Transaction} from '../../transaction/dto/transaction';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Transfer} from '../../transfer/transfer';
import {CategorizeRequest} from '../../transaction-categorize/dto/categorize-request';
import {TransactionCategory} from '../../transaction-categorize/dto/transaction-category';
import {DetailResponse} from '../../transaction/dto/detail-response';
import {ConfigService} from '../config/config.service';

export interface PaymentResponse {
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  private apiUrl = this.configService.apiBaseUrl;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private configService: ConfigService) {
  }

  getTransactions(id: string, tableid: string): Observable<any> {
    const token = localStorage.getItem('token');
    const transactieUrl = this.apiUrl + `/accounts/${id}/details?token=${token}&tableid=${tableid}`;
    return this.http.get<DetailResponse>(transactieUrl).pipe();
  }

  getTransaction(id: string, tableid: string, transactieid: string) {
      const token = localStorage.getItem('token');
      const url = `${this.apiUrl}/accounts/${id}/${transactieid}/details?token=${token}&tableid=${tableid}`;
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


