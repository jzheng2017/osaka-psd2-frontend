import {Component, OnInit} from '@angular/core';
import {Transaction} from './dto/transaction';
import {ActivatedRoute} from '@angular/router';
import {TransactionService} from '../service/banks/transaction.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transaction: Transaction;
  isLoading = true;
  accountid: any;
  btwTarief = '21';
  constructor(private location: Location, private activatedRoute: ActivatedRoute, private transactionService: TransactionService) {
  }

  ngOnInit() {
    this.accountid = this.activatedRoute.snapshot.paramMap.get('id');
    this.getTransaction(this.accountid, this.activatedRoute.snapshot.paramMap.get('tableId'), this.activatedRoute.snapshot.paramMap.get('transactieId'));
  }

  getTransaction(id: string, tableid: string, transactieid: string) {
    this.transactionService.getTransaction(id, tableid, transactieid).subscribe(transaction => {
      this.transaction = transaction;
      this.isLoading = false;
    });
  }

  back() {
    this.location.back();
  }
  onSubmit() {
    this.transactionService.updateTransaction(this.transaction).subscribe(() => this.location.back());
  }

  getBTW() {
    // Stel BTW tarief vast vanauit de Front-End
    // this.btwTarief =
  }
}
