import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Transaction} from '../../transaction/dto/transaction';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Transfer} from "../../transfer/transfer";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
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

  createTransaction(transaction: Transfer) {
    const transactionUrl = `${this.apiUrl}/payment`;
    console.log(transaction);
    return this.http.post(transactionUrl, transaction);
  }
}


