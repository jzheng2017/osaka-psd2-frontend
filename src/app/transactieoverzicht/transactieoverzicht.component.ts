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
  private tableId;

  transactions: Transaction[];
  account: any;
  @Output() parentAccount = new EventEmitter();
  isLoading = true;
  private title = 'Transactieoverzicht';
  error = '';

  constructor(private spinner: NgxSpinnerService, private transactionService: TransactionService,
              private activatedRoute: ActivatedRoute, private titleService: Title, private location: Location) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.tableId = this.activatedRoute.snapshot.paramMap.get('tableid');
    this.getTransactions();
    this.spinner.show();
  }

  getTransactions() {
    const bankAccountId = this.activatedRoute.snapshot.paramMap.get('id');

    this.transactionService.getTransacties(bankAccountId, this.tableId).subscribe(transactions => {
      this.transactions = transactions.transactions;
      this.isLoading = false;
      this.account = transactions.account;
      this.parentAccount.emit(this.account);
    }, err => {
        this.error = err.error.errorMessage;
    });
  }

  back() {
    this.location.back();
  }
}

