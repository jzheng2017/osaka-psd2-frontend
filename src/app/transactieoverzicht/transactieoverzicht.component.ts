import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TransactionService} from '../service/banks/transaction.service';
import {Transaction} from '../transaction/dto/transaction';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {Location} from '@angular/common';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-transactieoverzicht',
  templateUrl: './transactieoverzicht.component.html',
  styleUrls: ['./transactieoverzicht.component.css']
})
export class TransactieoverzichtComponent implements OnInit {
  transactions: Transaction[];
  account: any;
  accountid: any;
  @Output() parentAccount = new EventEmitter();
  isLoading = true;
  error = '';
  // status: number;
  private tableId;
  private title = 'Transactieoverzicht';

  constructor(private spinner: NgxSpinnerService, private transactionService: TransactionService,
              private activatedRoute: ActivatedRoute, private titleService: Title, private location: Location) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.accountid = this.activatedRoute.snapshot.paramMap.get('id');
    this.tableId = this.activatedRoute.snapshot.paramMap.get('tableid');
    this.getTransactions();
    this.spinner.show();
  }

  getTransactions() {
    this.transactionService.getTransactions(this.accountid, this.tableId).subscribe(transactions => {
      this.transactions = transactions.transactions;
      this.isLoading = false;
      this.account = transactions.account;
      this.parentAccount.emit(this.account);
    }, err => {
      this.isLoading = false;
      this.error = err.error.errorMessage;
    });
  }

  getAccountFromTransaction(transaction: Transaction) {
    if (transaction.received) {
      return transaction.sender;
    }

    return transaction.receiver;
  }

  back() {
    this.location.back();
  }
}

